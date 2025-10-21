import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { BossRanking } from "../types/community";

interface ThemedProps {
  theme: DefaultTheme;
}

const RankingItemContainer = styled.View`
  background-color: ${(props: ThemedProps) =>
    props.theme.colors.cardBackground};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.lg}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RankingLeft = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const MedalIcon = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  align-items: center;
  justify-content: center;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const RankingInfo = styled.View`
  flex: 1;
`;

const BossName = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: 4px;
`;

const SalesInfo = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const RankNumber = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.primary};
`;

interface BossRankingItemProps {
  ranking: BossRanking;
}

export const BossRankingItem = ({ ranking }: BossRankingItemProps) => {
  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return "emoji-events";
      case 2:
        return "military-tech";
      case 3:
        return "workspace-premium";
      default:
        return "star";
    }
  };

  return (
    <RankingItemContainer
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <RankingLeft>
        <MedalIcon>
          <MaterialIcons
            name={getMedalIcon(ranking.rank) as any}
            size={20}
            color="white"
          />
        </MedalIcon>
        <RankingInfo>
          <BossName>
            {ranking.businessName} {ranking.bossName} 사장님
          </BossName>
          <SalesInfo>월 매출 증가율: {ranking.salesIncreaseRate}%</SalesInfo>
        </RankingInfo>
      </RankingLeft>
      <RankNumber>#{ranking.rank}</RankNumber>
    </RankingItemContainer>
  );
};
