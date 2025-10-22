import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const maxCardWidth = screenWidth - 20;

const ActionCard = styled.View`
  background-color: #ffffff;
  border-radius: 18px 18px 18px 4px;
  padding: 20px;
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

const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-left: 8px;
`;

const ActionList = styled.View`
  margin-top: 12px;
`;

const ActionItem = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 12px;
  width: 100%;
`;

const ActionIcon = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background-color: #34c759;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  margin-top: 2px;
  flex-shrink: 0;
`;

const ActionText = styled.Text`
  font-size: 15px;
  color: #333333;
  line-height: 22px;
  text-align: left;
  padding-right: 10px;
`;

const PriorityTag = styled.View<{ priority: "high" | "medium" | "low" }>`
  background-color: ${(props: { priority: string }) => {
    switch (props.priority) {
      case "high":
        return "#FF3B30";
      case "medium":
        return "#FF9500";
      case "low":
        return "#34C759";
      default:
        return "#8E8E93";
    }
  }};
  padding: 2px 6px;
  border-radius: 4px;
  margin-bottom: 12px;
  align-self: flex-start;
`;

const PriorityText = styled.Text`
  font-size: 12px;
  color: #ffffff;
  font-weight: bold;
`;

export interface ActionItem {
  text: string;
  priority: "high" | "medium" | "low";
}

interface ChatActionCardProps {
  title: string;
  actions: ActionItem[];
}

export const ChatActionCard = ({ title, actions }: ChatActionCardProps) => {
  return (
    <ActionCard>
      <CardHeader>
        <MaterialIcons name="assignment" size={20} color="#666" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <ActionList>
        {actions.map((action, index) => (
          <ActionItem key={index}>
            <ActionIcon>
              <MaterialIcons name="check" size={12} color="#FFFFFF" />
            </ActionIcon>
            <ActionText numberOfLines={1}>{action.text}</ActionText>
          </ActionItem>
        ))}
      </ActionList>
    </ActionCard>
  );
};
