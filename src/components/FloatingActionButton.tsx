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
  bottom: 100px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
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
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
      }}
    >
      <CustomIcon source={iconSource} size={24} color="#FFFFFF" />
    </FABContainer>
  );
};
