import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

interface ThemedProps {
  theme: DefaultTheme;
}

const MetricContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-vertical: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const MetricValue = styled.Text`
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xl}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const MetricLabel = styled.Text`
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  text-align: center;
`;

const Divider = styled.View`
  width: 1px;
  height: 40px;
  background-color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  opacity: 0.3;
`;

interface MetricItemProps {
  value: string;
  label: string;
  color?: string;
  showDivider?: boolean;
}

export const MetricItem: React.FC<MetricItemProps> = ({
  value,
  label,
  color,
  showDivider = false,
}) => {
  return (
    <>
      <MetricContainer>
        <MetricValue style={color ? { color } : undefined}>{value}</MetricValue>
        <MetricLabel>{label}</MetricLabel>
      </MetricContainer>
      {showDivider && <Divider />}
    </>
  );
};
