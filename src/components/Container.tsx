import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

interface ThemedProps {
  theme: DefaultTheme;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

export const Title = styled.Text`
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xl}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

export const Subtitle = styled.Text`
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props: ThemedProps) => props.theme.colors.primary};
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px
    ${(props: ThemedProps) => props.theme.spacing.lg}px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.md}px;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
`;
