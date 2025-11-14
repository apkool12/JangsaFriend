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
  margin-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding: 4px;
`;

const TabButton = styled.TouchableOpacity<{ isActive: boolean } & ThemedProps>`
  flex: 1;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-left: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.md}px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.sm}px;
  background-color: ${(props: { isActive: boolean } & ThemedProps) =>
    props.isActive ? props.theme.colors.primary : "transparent"};
  align-items: center;
`;

const TabText = styled.Text<{ isActive: boolean } & ThemedProps>`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: { isActive: boolean } & ThemedProps) =>
    props.isActive
      ? props.theme.fontWeight.bold
      : props.theme.fontWeight.medium};
  color: ${(props: { isActive: boolean } & ThemedProps) =>
    props.isActive ? "#FFFFFF" : props.theme.colors.textSecondary};
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
