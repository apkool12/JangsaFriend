import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { CustomIcon } from "./CustomIcon";

interface ThemedProps {
  theme: DefaultTheme;
}

const HeaderContainer = styled.View`
  align-items: center;
  padding-vertical: ${(props: ThemedProps) => props.theme.spacing.xl}px;
  padding-horizontal: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const LogoIcon = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${(props: ThemedProps) => props.theme.colors.brand};
  align-items: center;
  justify-content: center;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const BrandText = styled.Text`
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xl}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.brand};
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoIcon>
          <CustomIcon
            source={require("../../assets/icon/icon.png")}
            size={20}
          />
        </LogoIcon>
        <BrandText>장사친구</BrandText>
      </LogoContainer>
    </HeaderContainer>
  );
};
