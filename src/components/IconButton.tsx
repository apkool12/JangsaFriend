import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";
import { CustomIcon } from "./CustomIcon";

interface ThemedProps {
  theme: DefaultTheme;
}

const IconButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${(props: ThemedProps) => props.theme.colors.surface};
  margin-horizontal: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

const IconLabel = styled.Text`
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  text-align: center;
`;

interface IconButtonProps {
  iconSource: ImageSourcePropType | React.FC<SvgProps>;
  label: string;
  onPress?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconSource,
  label,
  onPress,
}) => {
  return (
    <IconButtonContainer onPress={onPress}>
      <CustomIcon source={iconSource} size={32} />
      <IconLabel>{label}</IconLabel>
    </IconButtonContainer>
  );
};
