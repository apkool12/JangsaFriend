import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { CustomIcon } from "./CustomIcon";

interface ThemedProps {
  theme: DefaultTheme;
}

const HeaderContainer = styled.View`
  width: 402px;
  height: 112px;
  background-color: #fff;
  align-items: flex-start;
  align-self: center;
  flex-shrink: 0;
  padding-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-top: 60px;
`;

const LogoContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

const LogoIcon = styled.View`
  width: 126px;
  height: 42px;
  align-items: center;
  justify-content: center;
`;

export const Header = () => {
  return (
    <HeaderContainer
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 1,
        elevation: 2,
      }}
    >
      <LogoContainer>
        <LogoIcon>
          <CustomIcon
            source={require("../../assets/icon/icon.png")}
            size={126}
          />
        </LogoIcon>
      </LogoContainer>
    </HeaderContainer>
  );
};
