import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const maxCardWidth = screenWidth - 20;

const DataCard = styled.View`
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

const MetricsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MetricItem = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 12px;
  min-width: 80px;
`;

const MetricValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
`;

const MetricLabel = styled.Text`
  font-size: 12px;
  color: #666666;
  margin-top: 4px;
  text-align: center;
`;

const TrendContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

const TrendText = styled.Text<{ positive: boolean }>`
  font-size: 12px;
  color: ${(props: { positive: boolean }) =>
    props.positive ? "#34C759" : "#FF3B30"};
  margin-left: 4px;
`;

export interface DataMetric {
  label: string;
  value: string;
  change: number;
  icon: string;
}

interface ChatDataCardProps {
  title: string;
  metrics: DataMetric[];
}

export const ChatDataCard = ({ title, metrics }: ChatDataCardProps) => {
  return (
    <DataCard>
      <CardHeader>
        <MaterialIcons name="analytics" size={20} color="#666" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <MetricsContainer>
        {metrics.map((metric, index) => (
          <MetricItem key={index}>
            <MaterialIcons name={metric.icon as any} size={24} color="#666" />
            <MetricValue>{metric.value}</MetricValue>
            <MetricLabel>{metric.label}</MetricLabel>
            <TrendContainer>
              <MaterialIcons
                name={metric.change > 0 ? "trending-up" : "trending-down"}
                size={14}
                color={metric.change > 0 ? "#34C759" : "#FF3B30"}
              />
              <TrendText positive={metric.change > 0}>
                {metric.change > 0 ? "+" : ""}
                {metric.change}%
              </TrendText>
            </TrendContainer>
          </MetricItem>
        ))}
      </MetricsContainer>
    </DataCard>
  );
};
