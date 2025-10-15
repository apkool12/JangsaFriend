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
  margin-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

interface CardProps {
  children: React.ReactNode;
  style?: any;
}

export const Card = ({ children, style }: CardProps) => {
  return (
    <CardContainer
      style={[
        {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        style,
      ]}
    >
      {children}
    </CardContainer>
  );
};
