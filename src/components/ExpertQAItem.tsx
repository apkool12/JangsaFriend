import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ExpertQA } from "../types/community";

interface ThemedProps {
  theme: DefaultTheme;
}

const QAItemContainer = styled.View`
  padding-top: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props: ThemedProps) => props.theme.colors.border};
`;

const MetaRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const TopicBadge = styled.View`
  padding-left: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.round}px;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
  margin-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const BadgeLabel = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const StatusPill = styled.View`
  padding-left: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.round}px;
  background-color: ${(props: ThemedProps) => props.theme.colors.success}20;
`;

const StatusText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: ${(props: ThemedProps) => props.theme.colors.success};
`;

const QAHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props: ThemedProps) => props.theme.colors.primary};
  margin-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const Question = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const ExpertInfo = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const Answer = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  line-height: 20px;
`;

const FooterRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const FooterMeta = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const DetailLabel = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.info};
  margin-right: 4px;
`;

interface ExpertQAItemProps {
  qa: ExpertQA;
}

export const ExpertQAItem = ({ qa }: ExpertQAItemProps) => {
  return (
    <QAItemContainer
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <MetaRow>
        <TopicBadge>
          <BadgeLabel>전문가 답변</BadgeLabel>
        </TopicBadge>
        <StatusPill>
          <StatusText>답변 완료</StatusText>
        </StatusPill>
      </MetaRow>

      <QAHeader>
        <Dot />
        <Question>{qa.question}</Question>
      </QAHeader>
      <ExpertInfo>
        {qa.expertName} · {qa.expertTitle}
      </ExpertInfo>
      <Answer numberOfLines={2}>{qa.answer}</Answer>

      <FooterRow>
        <FooterMeta>방금 전 · 조회 128</FooterMeta>
        <DetailButton onPress={() => console.log("Q&A 자세히 보기", qa.id)}>
          <DetailLabel>자세히 보기</DetailLabel>
          <MaterialIcons name="chevron-right" size={18} color="#4D8EFF" />
        </DetailButton>
      </FooterRow>
    </QAItemContainer>
  );
};
