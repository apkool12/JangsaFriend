import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

interface ThemedProps {
  theme: DefaultTheme;
}

const Container = styled.View`
  flex: 1;
  background-color: #fdfaf6;
`;

const Content = styled.ScrollView`
  flex: 1;
`;

const Inner = styled.View`
  flex: 1;
  padding: ${(props: ThemedProps) => props.theme.spacing.xl}px;
  padding-top: 140px;
  padding-bottom: 40px;
`;

const Logo = styled(Image).attrs({
  resizeMode: "contain",
})`
  width: 160px;
  height: 160px;
  align-self: center;
  margin-bottom: 50px;
`;

const FieldLabel = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: #5c4a3b;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const InputWrapper = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #d7cec4;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const StyledInput = styled.TextInput`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  color: ${(props: ThemedProps) => props.theme.colors.text};
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #4a3429;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
  border-radius: 20px;
  align-items: center;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.xl}px;
`;

const LoginButtonText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: #ffffff;
`;

const LinkRow = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  gap: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const LinkButton = styled.TouchableOpacity`
  padding-left: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const LinkText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  color: #8c7a6b;
`;

const LinkDivider = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  color: #c8beb3;
`;

interface LoginScreenProps {
  onLoginSuccess?: () => void;
}

export const LoginScreen = ({ onLoginSuccess }: LoginScreenProps) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess?.();
    }, 800);
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content showsVerticalScrollIndicator={false}>
          <Inner>
            <Logo source={require("../../assets/icon/icon.png")} />

            <FieldLabel>아이디</FieldLabel>
            <InputWrapper>
              <StyledInput
                placeholder="아이디를 입력해 주세요"
                placeholderTextColor="#B7ADA3"
                value={loginId}
                onChangeText={setLoginId}
                autoCapitalize="none"
              />
            </InputWrapper>

            <FieldLabel>비밀번호</FieldLabel>
            <InputWrapper>
              <StyledInput
                placeholder="비밀번호를 입력해 주세요"
                placeholderTextColor="#B7ADA3"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </InputWrapper>

            <LoginButton onPress={handleLogin} activeOpacity={0.9}>
              {isLoading ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <LoginButtonText>로그인</LoginButtonText>
              )}
            </LoginButton>

            <LinkRow>
              {["회원가입", "아이디 찾기", "비밀번호 찾기"].map(
                (label, index) => (
                  <React.Fragment key={label}>
                    <LinkButton
                      onPress={() => console.log(label)}
                      activeOpacity={0.8}
                    >
                      <LinkText>{label}</LinkText>
                    </LinkButton>
                    {index < 2 && <LinkDivider>|</LinkDivider>}
                  </React.Fragment>
                )
              )}
            </LinkRow>
          </Inner>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default LoginScreen;
