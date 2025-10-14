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
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 8px;
  elevation: 8;
`;

interface FloatingActionButtonProps {
  iconSource: ImageSourcePropType | React.FC<SvgProps>;
  onPress?: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  iconSource,
  onPress,
}) => {
  return (
    <FABContainer onPress={onPress}>
      <CustomIcon source={iconSource} size={24} color="#FFFFFF" />
    </FABContainer>
  );
};
