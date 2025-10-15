import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

interface ThemedProps {
  theme: DefaultTheme;
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const Title = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xl}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  text-align: center;
`;

const Subtitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  text-align: center;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const EducationScreen = () => {
  return (
    <Container>
      <Title>교육</Title>
      <Subtitle>교육 자료가 곧 추가됩니다</Subtitle>
    </Container>
  );
};

export default EducationScreen;
