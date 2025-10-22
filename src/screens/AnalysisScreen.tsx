import React, { useState } from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import {
  KPICard,
  Header,
  SectionHeader,
  CustomTab,
  RankingChart,
  TrendChart,
  KeywordChips,
  ReviewChart,
} from "../components";
import {
  mockRankingData,
  mockSearchTrendData,
  mockReviewData,
  mockKeywordData,
} from "../data/mockAnalyticsData";

interface ThemedProps {
  theme: DefaultTheme;
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  padding: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const KPIContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const FunnelContainer = styled.View`
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xl}px;
`;

const TabContent = styled.View`
  padding-horizontal: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-vertical: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const PlaceholderText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  text-align: center;
  padding-vertical: ${(props: ThemedProps) => props.theme.spacing.xl}px;
`;

const AnalysisScreen = () => {
  const [activeTab, setActiveTab] = useState("before");

  const tabs = [
    { key: "before", label: "방문 전" },
    { key: "after", label: "방문 후" },
  ];

  const renderTabContent = () => {
    if (activeTab === "before") {
      return (
        <TabContent>
          <RankingChart data={mockRankingData} />
          <TrendChart
            data={mockSearchTrendData}
            title="검색 트렌드 (최근 7일)"
          />
        </TabContent>
      );
    } else {
      return (
        <TabContent>
          <ReviewChart
            data={mockReviewData}
            title="리뷰 & 평점 트렌드 (최근 7일)"
          />
          <KeywordChips data={mockKeywordData} />
        </TabContent>
      );
    }
  };

  return (
    <Container>
      <Header />
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <KPIContainer>
          <KPICard
            title="노출"
            value="12,450"
            unit="회"
            change={15.2}
            badge="도달"
          />
          <KPICard
            title="클릭"
            value="1,230"
            unit="회"
            change={-3.1}
            badge="노출"
          />
        </KPIContainer>

        <KPIContainer>
          <KPICard
            title="방문/예약"
            value="89"
            unit="건"
            change={8.5}
            badge="클릭"
          />
          <KPICard
            title="평균평점"
            value="4.2"
            unit="점"
            change={0.3}
            badge="리뷰"
          />
        </KPIContainer>

        <SectionHeader
          title="퍼널 분석"
          subtitle="방문 전후 지표를 비교해보세요"
        />

        <FunnelContainer>
          <CustomTab
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          {renderTabContent()}
        </FunnelContainer>
      </ScrollContainer>
    </Container>
  );
};

export default AnalysisScreen;
