import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

interface ThemedProps {
  theme: DefaultTheme;
}

const CardContainer = styled.View`
  background-color: ${(props: ThemedProps) =>
    props.theme.colors.cardBackground};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.lg}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  flex: 1;
  margin-left: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const Title = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const Badge = styled.View`
  background-color: ${(props: ThemedProps) => props.theme.colors.info};
  padding-left: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.sm}px;
`;

const BadgeText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: 10px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: white;
`;

const ValueContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const Value = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xl}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
`;

const Unit = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  margin-left: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const ChangeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ChangeText = styled.Text<{ isPositive: boolean } & ThemedProps>`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props) =>
    props.isPositive ? props.theme.colors.success : props.theme.colors.error};
  margin-left: 2px;
`;

interface KPICardProps {
  title: string;
  value: string;
  unit?: string;
  change?: number; // 증감률 (%)
  badge?: string; // 분모 표시 (예: "도달", "노출", "조회")
}

export const KPICard = ({
  title,
  value,
  unit,
  change,
  badge,
}: KPICardProps) => {
  const isPositive = change ? change >= 0 : true;
  const changeIcon = change
    ? change >= 0
      ? "trending-up"
      : "trending-down"
    : "remove";

  return (
    <CardContainer
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Header>
        <Title>{title}</Title>
        {badge && (
          <Badge>
            <BadgeText>{badge}</BadgeText>
          </Badge>
        )}
      </Header>

      <ValueContainer>
        <Value>{value}</Value>
        {unit && <Unit>{unit}</Unit>}
      </ValueContainer>

      {change !== undefined && (
        <ChangeContainer>
          <MaterialIcons
            name={changeIcon}
            size={12}
            color={isPositive ? "#34C759" : "#FF3B30"}
          />
          <ChangeText isPositive={isPositive}>{Math.abs(change)}%</ChangeText>
        </ChangeContainer>
      )}
    </CardContainer>
  );
};
