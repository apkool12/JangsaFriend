import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { View, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { RankingData } from "../data/mockAnalyticsData";

interface ThemedProps {
  theme: DefaultTheme;
}

const ChartContainer = styled.View`
  background-color: ${(props: ThemedProps) => props.theme.colors.surface};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.md}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  margin-left: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
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

const LegendContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const LegendItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const LegendColor = styled.View<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  margin-right: 4px;
`;

const LegendText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const KeywordDetailsContainer = styled.View`
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.sm}px;
`;

const KeywordRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props: ThemedProps) => props.theme.colors.border};
`;

const KeywordName = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  flex: 1;
`;

const RankingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RankingText = styled.Text<{ color: string }>`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props) => props.color};
  margin-left: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  min-width: 25px;
  text-align: center;
  background-color: ${(props) => props.color}20;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
`;

interface RankingChartProps {
  data: RankingData[];
}

export const RankingChart = ({ data }: RankingChartProps) => {
  const screenWidth = Dimensions.get("window").width;
  const chartWidth = screenWidth - 80; // 패딩 고려

  // react-native-chart-kit용 데이터 변환 - 멀티 바 차트로 색상 구분
  const chartData = {
    labels: data.map((item, index) => {
      // 키워드를 더 짧게 표시하여 겹침 방지
      if (item.keyword.length > 6) {
        return item.keyword.substring(0, 6) + "...";
      }
      return item.keyword;
    }),
    datasets: [
      {
        data: data.map((item) => item.naver),
        color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`, // 네이버 - 금색
        strokeWidth: 2,
      },
      {
        data: data.map((item) => item.google),
        color: (opacity = 1) => `rgba(52, 199, 89, ${opacity})`, // 구글 - 초록색
        strokeWidth: 2,
      },
      {
        data: data.map((item) => item.kakao),
        color: (opacity = 1) => `rgba(255, 149, 0, ${opacity})`, // 카카오 - 주황색
        strokeWidth: 2,
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
    barPercentage: 0.6,
    propsForLabels: {
      fontSize: 10,
    },
  };

  return (
    <ChartContainer>
      <ChartTitle>키워드별 지도 랭킹 비교</ChartTitle>

      <View style={{ height: 280, alignItems: "center" }}>
        <BarChart
          data={chartData}
          width={chartWidth}
          height={280}
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          showValuesOnTopOfBars={false}
          fromZero
          style={{
            borderRadius: 12,
            marginVertical: 8,
          }}
        />
      </View>

      <LegendContainer>
        <LegendItem>
          <LegendColor color="#FFD700" />
          <LegendText>네이버</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#34C759" />
          <LegendText>구글</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#FF9500" />
          <LegendText>카카오</LegendText>
        </LegendItem>
      </LegendContainer>

      <KeywordDetailsContainer>
        {data.map((item, index) => (
          <KeywordRow key={index}>
            <KeywordName>{item.keyword}</KeywordName>
            <RankingContainer>
              <RankingText color="#FFD700">{item.naver}위</RankingText>
              <RankingText color="#34C759">{item.google}위</RankingText>
              <RankingText color="#FF9500">{item.kakao}위</RankingText>
            </RankingContainer>
          </KeywordRow>
        ))}
      </KeywordDetailsContainer>
    </ChartContainer>
  );
};
