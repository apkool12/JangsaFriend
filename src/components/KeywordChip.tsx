import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { KeywordData } from "../data/mockAnalyticsData";

interface ThemedProps {
  theme: DefaultTheme;
}

const ChipContainer = styled.View<{ sentiment: string }>`
  background-color: ${(props) => {
    switch (props.sentiment) {
      case "positive":
        return props.theme.colors.success + "20";
      case "negative":
        return props.theme.colors.error + "20";
      default:
        return props.theme.colors.info + "20";
    }
  }};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.round}px;
  padding-horizontal: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-vertical: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  margin: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${(props) => {
    switch (props.sentiment) {
      case "positive":
        return props.theme.colors.success;
      case "negative":
        return props.theme.colors.error;
      default:
        return props.theme.colors.info;
    }
  }};
`;

const ChipText = styled.Text<{ sentiment: string }>`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props) => {
    switch (props.sentiment) {
      case "positive":
        return props.theme.colors.success;
      case "negative":
        return props.theme.colors.error;
      default:
        return props.theme.colors.info;
    }
  }};
  margin-right: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const CountText = styled.Text<{ sentiment: string }>`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props) => {
    switch (props.sentiment) {
      case "positive":
        return props.theme.colors.success;
      case "negative":
        return props.theme.colors.error;
      default:
        return props.theme.colors.info;
    }
  }};
`;

const ChipsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const SectionTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  text-align: center;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

interface KeywordChipProps {
  keyword: string;
  sentiment: "positive" | "negative" | "neutral";
  count: number;
}

const KeywordChip = ({ keyword, sentiment, count }: KeywordChipProps) => {
  const getSentimentIcon = () => {
    switch (sentiment) {
      case "positive":
        return "sentiment-very-satisfied";
      case "negative":
        return "sentiment-very-dissatisfied";
      default:
        return "sentiment-neutral";
    }
  };

  return (
    <ChipContainer sentiment={sentiment}>
      <MaterialIcons
        name={getSentimentIcon()}
        size={16}
        color={
          sentiment === "positive"
            ? "#34C759"
            : sentiment === "negative"
            ? "#FF3B30"
            : "#5AC8FA"
        }
      />
      <ChipText sentiment={sentiment}>{keyword}</ChipText>
      <CountText sentiment={sentiment}>{count}</CountText>
    </ChipContainer>
  );
};

interface KeywordChipsProps {
  data: KeywordData[];
}

export const KeywordChips = ({ data }: KeywordChipsProps) => {
  return (
    <>
      <SectionTitle>리뷰 키워드 분석</SectionTitle>
      <ChipsContainer>
        {data.map((item, index) => (
          <KeywordChip
            key={index}
            keyword={item.keyword}
            sentiment={item.sentiment}
            count={item.count}
          />
        ))}
      </ChipsContainer>
    </>
  );
};
