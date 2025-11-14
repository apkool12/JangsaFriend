import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import {
  Header,
  IconButton,
  Card,
  MetricItem,
  UpdateItem,
  FloatingActionButton,
  ChatBotModal,
} from "../components";
import {
  HomeScreenNavigationProp,
  RootTabParamList,
} from "../navigation/types";

// SVG 아이콘들 import
import LineChartIcon from "../../assets/icon/line_chart.svg";
import DropUpIcon from "../../assets/icon/drop_up.svg";
import NewsIcon from "../../assets/icon/news.svg";
import ChatBotIcon from "../../assets/icon/chat_bot.svg";

interface ThemedProps {
  theme: DefaultTheme;
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

const MainFeaturesContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.xl}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const SectionTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const BusinessInfoContainer = styled.View`
  margin-left: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const BusinessName = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const BusinessType = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const Divider = styled.View`
  height: 1px;
  background-color: ${(props: ThemedProps) => props.theme.colors.border};
`;

const MetricsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UpdatesContainer = styled.View`
  padding-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xxl}px;
`;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [isChatModalVisible, setIsChatModalVisible] = useState(false);

  const handleNavigate = (route: keyof RootTabParamList) => {
    navigation.navigate(route);
  };

  const handleChatPress = () => {
    setIsChatModalVisible(true);
  };

  return (
    <Container>
      <Header />
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <MainFeaturesContainer>
          <IconButton
            iconSource={require("../../assets/3dicon/chart.png")}
            label="AI 분석"
            onPress={() => handleNavigate("Analysis")}
          />
          <IconButton
            iconSource={require("../../assets/3dicon/education.png")}
            label="교육 자료"
            onPress={() => handleNavigate("Education")}
          />
          <IconButton
            iconSource={require("../../assets/3dicon/comm.png")}
            label="커뮤니티"
            onPress={() => handleNavigate("Community")}
          />
        </MainFeaturesContainer>

        <SectionTitle>대시보드</SectionTitle>
        <Card style={{ marginHorizontal: 24 }}>
          <BusinessInfoContainer>
            <BusinessName>커피천국</BusinessName>
            <BusinessType>카페 | 대전시 유성구</BusinessType>
          </BusinessInfoContainer>

          <Divider />

          <MetricsContainer>
            <MetricItem value="850만원" label="전월 매출" showDivider={true} />
            <MetricItem
              value="120만원"
              label="마케팅 비용"
              showDivider={true}
            />
            <MetricItem value="708%" label="마케팅 ROI" color="#FF8787" />
          </MetricsContainer>
        </Card>

        <SectionTitle>최근 업데이트</SectionTitle>
        <UpdatesContainer>
          <UpdateItem
            iconSource={LineChartIcon}
            title="마케팅 ROI 개선"
            description="전월 대비 마케팅 효율성이 15% 상승했습니다"
            onPress={() => handleNavigate("Analysis")}
          />
          <UpdateItem
            iconSource={DropUpIcon}
            title="네이버 플레이스 순위"
            description="'학하동 카페' 키워드 5위 → 3위로 상승"
            onPress={() => handleNavigate("Community")}
          />
          <UpdateItem
            iconSource={NewsIcon}
            title="새 교육 콘텐츠"
            description="'SNS 마케팅 활용법' 강의가 추가되었습니"
            onPress={() => handleNavigate("Education")}
          />
        </UpdatesContainer>
      </ScrollContainer>

      <FloatingActionButton
        iconSource={ChatBotIcon}
        onPress={handleChatPress}
      />

      <ChatBotModal
        visible={isChatModalVisible}
        onClose={() => setIsChatModalVisible(false)}
      />
    </Container>
  );
};

export default HomeScreen;
