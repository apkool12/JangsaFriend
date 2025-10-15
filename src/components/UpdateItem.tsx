import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";
import { CustomIcon } from "./CustomIcon";

interface ThemedProps {
  theme: DefaultTheme;
}

const UpdateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  background-color: ${(props: ThemedProps) =>
    props.theme.colors.cardBackground};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.lg}px;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props: ThemedProps) => props.theme.colors.accent};
  align-items: center;
  justify-content: center;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const ContentContainer = styled.View`
  flex: 1;
`;

const UpdateTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const UpdateDescription = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  line-height: 18px;
`;

interface UpdateItemProps {
  iconSource: ImageSourcePropType | React.ComponentType<SvgProps>;
  title: string;
  description: string;
}

export const UpdateItem = ({
  iconSource,
  title,
  description,
}: UpdateItemProps) => {
  return (
    <UpdateContainer
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <IconContainer>
        <CustomIcon source={iconSource} size={20} color="#FFFFFF" />
      </IconContainer>
      <ContentContainer>
        <UpdateTitle>{title}</UpdateTitle>
        <UpdateDescription>{description}</UpdateDescription>
      </ContentContainer>
    </UpdateContainer>
  );
};
