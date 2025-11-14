import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

interface ThemedProps {
  theme: DefaultTheme;
}

const StateContainer = styled.View`
  width: 100%;
  padding: ${(props: ThemedProps) => props.theme.spacing.xl}px;
  align-items: center;
  justify-content: center;
`;

const StateTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  text-align: center;
`;

const StateDescription = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  margin-top: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  text-align: center;
  line-height: 18px;
`;

const ActionButton = styled.TouchableOpacity`
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  padding-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.md}px;
  background-color: ${(props: ThemedProps) => props.theme.colors.primary};
`;

const ActionLabel = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: #ffffff;
`;

const StyledIndicator = styled(ActivityIndicator)`
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

interface BaseStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

interface LoadingStateProps {
  message?: string;
}

export const LoadingState = ({ message }: LoadingStateProps) => {
  return (
    <StateContainer>
      <StyledIndicator size="small" color="#1B1B1B" />
      <StateTitle>{message ?? "데이터를 불러오는 중이에요"}</StateTitle>
    </StateContainer>
  );
};

export const EmptyState = ({
  title,
  description,
  actionLabel,
  onAction,
}: BaseStateProps) => {
  return (
    <StateContainer>
      <StateTitle>{title}</StateTitle>
      {description ? <StateDescription>{description}</StateDescription> : null}
      {actionLabel && onAction ? (
        <ActionButton onPress={onAction}>
          <ActionLabel>{actionLabel}</ActionLabel>
        </ActionButton>
      ) : null}
    </StateContainer>
  );
};

export const ErrorState = ({
  title,
  description,
  actionLabel,
  onAction,
}: BaseStateProps) => {
  return (
    <StateContainer>
      <StateTitle>{title}</StateTitle>
      {description ? <StateDescription>{description}</StateDescription> : null}
      {actionLabel && onAction ? (
        <ActionButton onPress={onAction}>
          <ActionLabel>{actionLabel}</ActionLabel>
        </ActionButton>
      ) : null}
    </StateContainer>
  );
};

