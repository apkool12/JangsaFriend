import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { TrendData } from "../data/mockAnalyticsData";

interface ThemedProps {
  theme: DefaultTheme;
}

const ChartContainer = styled.View`
  background-color: ${(props: ThemedProps) => props.theme.colors.surface};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.md}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-vertical: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  margin-horizontal: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

const ChartTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  text-align: center;
`;

interface TrendChartProps {
  data: TrendData[];
  title: string;
}

export const TrendChart = ({ data, title }: TrendChartProps) => {
  const screenWidth = Dimensions.get("window").width;
  const chartWidth = screenWidth - 80; // 패딩 고려

  // react-native-chart-kit용 데이터 변환 (최근 7일만 표시)
  const recentData = data.slice(-7);
  const chartData = {
    labels: recentData.map((_, index) => `${index + 1}일`),
    datasets: [
      {
        data: recentData.map((item) => item.value),
        color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,
        strokeWidth: 3,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
    style: {
      borderRadius: 12,
    },
    propsForDots: {
      r: "4",
      strokeWidth: "1",
      stroke: "#FFD700",
    },
  };

  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>

      <View style={{ height: 280, alignItems: "center" }}>
        <LineChart
          data={chartData}
          width={chartWidth}
          height={280}
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 12,
          }}
        />
      </View>
    </ChartContainer>
  );
};
