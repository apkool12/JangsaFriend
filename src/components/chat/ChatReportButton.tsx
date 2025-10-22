import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const maxCardWidth = screenWidth - 20;

const ReportCard = styled.View`
  background-color: #ffffff;
  border-radius: 18px 18px 18px 4px;
  padding: 16px;
  margin-bottom: 8px;
  margin-right: 20px;
  margin-left: 0px;
  align-self: flex-start;
  width: ${maxCardWidth}px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 2;
`;

const ReportHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const ReportTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-left: 8px;
`;

const ReportDescription = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-bottom: 16px;
  line-height: 18px;
  text-align: left;
  flex-shrink: 1;
`;

const ReportButton = styled.TouchableOpacity`
  background-color: #fed44e;
  border-radius: 8px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin-left: 8px;
`;

interface ChatReportButtonProps {
  title: string;
  description: string;
  buttonText: string;
  onPress?: () => void;
}

export const ChatReportButton = ({
  title,
  description,
  buttonText,
  onPress,
}: ChatReportButtonProps) => {
  return (
    <ReportCard>
      <ReportHeader>
        <MaterialIcons name="description" size={20} color="#666" />
        <ReportTitle>{title}</ReportTitle>
      </ReportHeader>
      <ReportDescription>{description}</ReportDescription>
      <ReportButton onPress={onPress}>
        <MaterialIcons name="download" size={16} color="#FFFFFF" />
        <ButtonText>{buttonText}</ButtonText>
      </ReportButton>
    </ReportCard>
  );
};
