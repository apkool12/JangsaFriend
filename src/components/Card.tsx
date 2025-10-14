import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

interface ThemedProps {
  theme: DefaultTheme;
}

const CardContainer = styled.View`
  background-color: ${(props: ThemedProps) =>
    props.theme.colors.cardBackground};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.lg}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-vertical: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

interface CardProps {
  children: React.ReactNode;
  style?: any;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return <CardContainer style={style}>{children}</CardContainer>;
};
