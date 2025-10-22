import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

interface ThemedProps {
  theme: DefaultTheme;
}

const HeaderContainer = styled.View`
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
  padding-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props: ThemedProps) => props.theme.colors.border};
`;

const Title = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
`;

const Subtitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  margin-top: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </HeaderContainer>
  );
};
