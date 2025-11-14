import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ExpertQA } from "../types/community";

interface ThemedProps {
  theme: DefaultTheme;
}

const QAItemContainer = styled.View`
  background-color: ${(props: ThemedProps) =>
    props.theme.colors.cardBackground};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.lg}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const QAHeader = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const QuestionIcon = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  align-items: center;
  justify-content: center;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  margin-top: 2px;
`;

const QAInfo = styled.View`
  flex: 1;
`;

const Question = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: 8px;
`;

const ExpertInfo = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  margin-bottom: 8px;
`;

const Answer = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  line-height: 18px;
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
      <QAHeader>
        <QuestionIcon>
          <MaterialIcons name="help" size={16} color="white" />
        </QuestionIcon>
        <QAInfo>
          <Question>{qa.question}</Question>
          <ExpertInfo>{qa.expertName}</ExpertInfo>
          <Answer>{qa.answer}</Answer>
        </QAInfo>
      </QAHeader>
    </QAItemContainer>
  );
};
