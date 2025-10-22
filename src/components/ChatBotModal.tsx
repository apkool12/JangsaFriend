import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  View,
  FlatList,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  mockChatPrompts,
  mockWeeklySummary,
  getChatResponse,
} from "../data/mockChatData";
import { ChatMessage } from "./chat/ChatMessage";
import { ChatDataCard } from "./chat/ChatDataCard";
import { ChatActionCard } from "./chat/ChatActionCard";
import { ChatReportButton } from "./chat/ChatReportButton";
import { TypingIndicator } from "./chat/TypingIndicator";

interface ThemedProps {
  theme: any;
}

const { height: screenHeight } = Dimensions.get("window");

const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

const ModalContainer = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: ${screenHeight * 0.85}px;
  flex-direction: column;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;

const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
`;

const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

const MessagesContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const WeeklySummaryCard = styled.TouchableOpacity`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  border-left-width: 4px;
  border-left-color: #fed44e;
`;

const SummaryHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const SummaryTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-left: 8px;
`;

const MetricsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const MetricItem = styled.View`
  flex: 1;
  align-items: center;
`;

const MetricValue = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

const MetricLabel = styled.Text`
  font-size: 12px;
  color: #666666;
  margin-top: 4px;
`;

const TrendIcon = styled.View<{ positive: boolean }>`
  margin-left: 4px;
`;

const PromptsContainer = styled.View`
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;

const PromptsTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #666666;
  margin-bottom: 12px;
  padding-left: 16px;
`;

const PromptButton = styled.TouchableOpacity`
  background-color: #f7f7f7;
  border-radius: 20px;
  padding: 12px 20px;
  margin-right: 12px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #e5e5e5;
  flex-shrink: 0;
  height: 44px;
`;

const PromptText = styled.Text`
  font-size: 14px;
  color: #333333;
  margin-left: 8px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px 16px 16px;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  background-color: #ffffff;
`;

const TextInputStyled = styled.TextInput`
  flex: 1;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin-right: 12px;
  font-size: 16px;
  color: #333333;
`;

const SendButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #fed44e;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

interface ChatMessage {
  id: string;
  text?: string;
  isUser: boolean;
  timestamp: Date;
  type?: "text" | "data" | "action" | "report" | "typing";
  content?: any;
}

interface ChatBotModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ChatBotModal = ({ visible, onClose }: ChatBotModalProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "안녕하세요! AI 마케팅 어시스턴트입니다. 마케팅 데이터 분석이나 개선 방안에 대해 질문해주세요.",
      isUser: false,
      timestamp: new Date(),
      type: "text",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
      }).start();
      // 모달이 닫힐 때 입력창 초기화
      setInputText("");
    }
  }, [visible]);

  const handleSend = (text?: string) => {
    const messageText = text || inputText.trim();
    if (messageText) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: messageText,
        isUser: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newMessage]);
      setInputText("");

      // 타이핑 인디케이터 표시
      setIsTyping(true);
      const typingMessage: ChatMessage = {
        id: "typing",
        isUser: false,
        timestamp: new Date(),
        type: "typing",
      };
      setMessages((prev) => [...prev, typingMessage]);

      // AI 응답 시뮬레이션
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => prev.filter((msg) => msg.id !== "typing"));

        const response = getChatResponse(messageText);
        const aiResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          isUser: false,
          timestamp: new Date(),
          type: response.type,
          text: response.type === "text" ? response.content : undefined,
          content: response.content,
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 2000);
    }
  };

  const handlePromptPress = (promptText: string) => {
    handleSend(promptText);
  };

  const handleWeeklySummaryPress = () => {
    const summaryMessage = "이번 주 마케팅 성과를 자세히 분석해주세요";
    handleSend(summaryMessage);
  };

  const renderMessage = ({ item }: { item: ChatMessage }) => {
    if (item.type === "typing") {
      return <TypingIndicator />;
    }

    if (item.isUser) {
      return <ChatMessage text={item.text || ""} isUser={true} />;
    }

    switch (item.type) {
      case "data":
        return (
          <ChatDataCard
            title={item.content.title}
            metrics={item.content.metrics}
          />
        );
      case "action":
        return (
          <ChatActionCard
            title={item.content.title}
            actions={item.content.actions}
          />
        );
      case "report":
        return (
          <ChatReportButton
            title={item.content.title}
            description={item.content.description}
            buttonText={item.content.buttonText}
            onPress={() => console.log("리포트 다운로드")}
          />
        );
      default:
        return <ChatMessage text={item.text || ""} isUser={false} />;
    }
  };

  const renderWeeklySummary = () => (
    <WeeklySummaryCard onPress={handleWeeklySummaryPress}>
      <SummaryHeader>
        <MaterialIcons name="insights" size={20} color="#666" />
        <SummaryTitle>{mockWeeklySummary.title}</SummaryTitle>
      </SummaryHeader>
      <MetricsRow>
        {mockWeeklySummary.metrics.map((metric, index) => (
          <MetricItem key={index}>
            <MetricValue>
              {metric.value}
              <TrendIcon positive={metric.change > 0}>
                <MaterialIcons
                  name={metric.change > 0 ? "trending-up" : "trending-down"}
                  size={12}
                  color={metric.change > 0 ? "#34C759" : "#FF3B30"}
                />
              </TrendIcon>
            </MetricValue>
            <MetricLabel>{metric.label}</MetricLabel>
          </MetricItem>
        ))}
      </MetricsRow>
    </WeeklySummaryCard>
  );

  const renderPrompts = () => (
    <PromptsContainer>
      <PromptsTitle>추천 질문</PromptsTitle>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingRight: 32,
        }}
        style={{ flexGrow: 0 }}
        bounces={false}
      >
        {mockChatPrompts.map((prompt) => (
          <PromptButton
            key={prompt.id}
            onPress={() => handlePromptPress(prompt.text)}
          >
            <MaterialIcons name={prompt.icon as any} size={18} color="#666" />
            <PromptText>{prompt.title}</PromptText>
          </PromptButton>
        ))}
      </ScrollView>
    </PromptsContainer>
  );

  return (
    <Modal
      visible={visible}
      animationType="none"
      transparent={true}
      onRequestClose={onClose}
    >
      <ModalOverlay>
        <Animated.View
          style={{
            transform: [{ translateY: slideAnim }],
          }}
        >
          <ModalContainer>
            <Header>
              <HeaderTitle>AI 마케팅 어시스턴트</HeaderTitle>
              <CloseButton onPress={onClose}>
                <MaterialIcons name="close" size={24} color="#666" />
              </CloseButton>
            </Header>

            <MessagesContainer>
              <ScrollView
                ref={scrollViewRef}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{
                  paddingBottom: 20,
                }}
                style={{ flex: 1 }}
                onContentSizeChange={() => {
                  scrollViewRef.current?.scrollToEnd({ animated: true });
                }}
              >
                {renderWeeklySummary()}
                {messages.map((item, index) => (
                  <View
                    key={item.id}
                    style={{
                      marginBottom: index === messages.length - 1 ? 40 : 8,
                    }}
                  >
                    {renderMessage({ item })}
                  </View>
                ))}
              </ScrollView>
            </MessagesContainer>

            {renderPrompts()}

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={0}
            >
              <InputContainer>
                <TextInputStyled
                  placeholder="마케팅 관련 질문을 입력하세요..."
                  placeholderTextColor="#999"
                  value={inputText}
                  onChangeText={setInputText}
                  multiline
                  maxLength={500}
                />
                <SendButton onPress={() => handleSend()}>
                  <MaterialIcons name="send" size={20} color="#FFFFFF" />
                </SendButton>
              </InputContainer>
            </KeyboardAvoidingView>
          </ModalContainer>
        </Animated.View>
      </ModalOverlay>
    </Modal>
  );
};
