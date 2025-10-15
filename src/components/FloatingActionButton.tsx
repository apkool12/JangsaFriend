import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";
import { CustomIcon } from "./CustomIcon";

interface ThemedProps {
  theme: DefaultTheme;
}

const FABContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 25px;
  right: 20px;
  width: 72px;
  height: 72px;
  border-radius: 50px;
  background-color: ${(props: ThemedProps) => props.theme.colors.accent};
  align-items: center;
  justify-content: center;
`;

interface FloatingActionButtonProps {
  iconSource: ImageSourcePropType | React.ComponentType<SvgProps>;
  onPress?: () => void;
}

export const FloatingActionButton = ({
  iconSource,
  onPress,
}: FloatingActionButtonProps) => {
  return (
    <FABContainer
      onPress={onPress}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      }}
    >
      <CustomIcon source={iconSource} size={42} color="#FFFFFF" />
    </FABContainer>
  );
};
