import React, { useState } from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

interface ThemedProps {
  theme: DefaultTheme;
}

const TabContainer = styled.View`
  flex-direction: row;
  background-color: ${(props: ThemedProps) => props.theme.colors.surface};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.md}px;
  margin-horizontal: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-vertical: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding: 4px;
`;

const TabButton = styled.TouchableOpacity<{ isActive: boolean }>`
  flex: 1;
  padding-vertical: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-horizontal: ${(props: ThemedProps) => props.theme.spacing.md}px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.sm}px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.primary : "transparent"};
  align-items: center;
`;

const TabText = styled.Text<{ isActive: boolean }>`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props) =>
    props.isActive
      ? props.theme.fontWeight.bold
      : props.theme.fontWeight.medium};
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.text
      : props.theme.colors.textSecondary};
`;

interface Tab {
  key: string;
  label: string;
}

interface CustomTabProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabKey: string) => void;
}

export const CustomTab = ({ tabs, activeTab, onTabChange }: CustomTabProps) => {
  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab.key}
          isActive={activeTab === tab.key}
          onPress={() => onTabChange(tab.key)}
        >
          <TabText isActive={activeTab === tab.key}>{tab.label}</TabText>
        </TabButton>
      ))}
    </TabContainer>
  );
};
