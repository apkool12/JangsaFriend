import React, { useMemo, useState } from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  PopularPostCard,
  ExpertQAItem,
  BossRankingItem,
  Header,
  EmptyState,
  CustomTab,
} from "../components";
import { PopularPost, ExpertQA, BossRanking } from "../types/community";

interface ThemedProps {
  theme: DefaultTheme;
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
`;

const ScrollContainer = styled(ScrollView)`
  flex: 1;
  padding-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const SectionSpacing = styled.View`
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xl}px;
`;

const CardSpacing = styled.View`
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const SectionHeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const SectionTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
`;

const SectionAction = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const SectionActionText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.info};
`;

const SectionActionIcon = styled(MaterialIcons).attrs({
  size: 16,
})`
  margin-left: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  color: ${(props: ThemedProps) => props.theme.colors.info};
`;

const HeroCard = styled.View`
  margin-top: ${(props: ThemedProps) => props.theme.spacing.xl}px;
  background-color: ${(props: ThemedProps) => props.theme.colors.primary};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.xl}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.xl}px;
`;

const HeroBadge = styled.View`
  align-self: flex-start;
  padding-left: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.round}px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const HeroBadgeText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: white;
`;

const HeroTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: 21px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.black};
  color: white;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const HeroSubtitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const StatsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StatCard = styled.View`
  flex: 1;
  background-color: ${(props: ThemedProps) =>
    props.theme.colors.cardBackground};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.lg}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const StatLabel = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const StatValue = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
`;

const QuickActionsCarousel = styled.ScrollView`
  margin-left: -${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const QuickActionsContent = styled.View`
  flex-direction: row;
  padding-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
`;

const QuickActionCard = styled.TouchableOpacity`
  width: 220px;
  background-color: ${(props: ThemedProps) =>
    props.theme.colors.cardBackground};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.lg}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const QuickActionIcon = styled.View`
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const QuickActionTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const QuickActionSubtitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const QuickActionCTA = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: ${(props: ThemedProps) => props.theme.colors.info};
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const TrendingCard = styled.View`
  background-color: ${(props: ThemedProps) =>
    props.theme.colors.cardBackground};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.lg}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TrendingInfo = styled.View`
  flex: 1;
  margin-left: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const TrendingLabel = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const TrendingValue = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
`;

const CTAButton = styled.TouchableOpacity`
  background-color: ${(props: ThemedProps) => props.theme.colors.primary};
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.md}px;
  align-items: center;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const CTAButtonText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: white;
`;

// 더미 데이터
const popularPosts: PopularPost[] = [
  {
    id: "1",
    authorName: "김사장",
    authorBusiness: "음식점",
    title: "인스타로 성공할 수 있었던 이유",
    content:
      "인스타그램 광고를 시작한 지 3개월 만에 매출이 30% 상승했습니다. 제가 진행한 방법을 공유합니다...",
    likes: 52,
    comments: 23,
    daysAgo: "5일 전",
  },
  {
    id: "2",
    authorName: "이사장",
    authorBusiness: "카페",
    title: "배달앱 수수료 절감 노하우",
    content:
      "배달앱 수수료가 부담되어 자체 주문 시스템을 도입한 결과, 수익이 15% 증가했습니다. 도입 과정을 공유합니다...",
    likes: 37,
    comments: 15,
    daysAgo: "1주일 전",
  },
];

const expertQAs: ExpertQA[] = [
  {
    id: "1",
    question: "SNS 마케팅 비용은 얼마나 투자해야 할까요?",
    expertName: "최지성 마케팅 전문가",
    expertTitle: "마케팅 전문가",
    answer:
      " 월 매출의 5-10%를 시작점으로 고려하는 것이 좋습니다. 초기에는 소액으로 시작해서 효과를 측정한 후 점진적으로 늘려가는 것을 추천합니다.",
  },
  {
    id: "2",
    question: "소규모 카페 홍보 전략이 궁금합니다",
    expertName: "박소영 마케팅 컨설턴트",
    expertTitle: "마케팅 컨설턴트",
    answer:
      " 지역 기반 SNS 마케팅과 로컬 인플루언서 협업이 효과적입니다. 특히 인스타그램과 카카오톡 채널을 활용한 마케팅을 추천합니다.",
  },
  {
    id: "3",
    question: "네이버 플레이스 순위 상승 방법은?",
    expertName: "김태훈 SEO 전문가",
    expertTitle: "SEO 전문가",
    answer:
      " 리뷰 관리와 키워드 최적화가 중요합니다. 정기적인 리뷰 요청과 고객 만족도 향상에 집중하세요.",
  },
];

const bossRankings: BossRanking[] = [
  {
    id: "1",
    rank: 1,
    businessName: "커피천국",
    bossName: "김민수",
    salesIncreaseRate: 45,
  },
  {
    id: "2",
    rank: 2,
    businessName: "맛있는 분식",
    bossName: "이영희",
    salesIncreaseRate: 32,
  },
  {
    id: "3",
    rank: 3,
    businessName: "건강헬스",
    bossName: "박지훈",
    salesIncreaseRate: 28,
  },
];

const communityStats = [
  { label: "오늘 질문", value: "24건" },
  { label: "새 답변", value: "58개" },
  { label: "참여 전문가", value: "12명" },
];

import { SvgProps } from "react-native-svg";
import QuestionIcon from "../../assets/3dicon/comunity/question.svg";
import ShareIcon from "../../assets/3dicon/comunity/share.svg";
import TrendIcon from "../../assets/3dicon/comunity/trend.svg";
import MentorIcon from "../../assets/3dicon/comunity/mentor.svg";

interface QuickActionConfig {
  key: string;
  title: string;
  description: string;
  icon: React.ComponentType<SvgProps>;
  cta: string;
}

const quickActions: QuickActionConfig[] = [
  {
    key: "question",
    title: "질문하기",
    description: "전문가에게 바로 질문",
    icon: QuestionIcon,
    cta: "질문 시작",
  },
  {
    key: "share",
    title: "사례 공유",
    description: "성공 스토리를 나눠요",
    icon: ShareIcon,
    cta: "글쓰기",
  },
  {
    key: "trend",
    title: "트렌드 리포트",
    description: "업계 이슈 읽어보기",
    icon: TrendIcon,
    cta: "보고서 열기",
  },
  {
    key: "mentor",
    title: "멘토 찾기",
    description: "분야별 전문가 매칭",
    icon: MentorIcon,
    cta: "멘토 탐색",
  },
];

type FilterOptionKey = "popular" | "latest" | "following";

const filterOptions: { key: FilterOptionKey; label: string }[] = [
  { key: "popular", label: "인기" },
  { key: "latest", label: "최신" },
  { key: "following", label: "팔로잉" },
];

const trendingTopics = [
  { label: "SNS 광고", momentum: "+18%", icon: "campaign" },
  { label: "리뷰 관리", momentum: "+11%", icon: "reviews" },
  { label: "배달 매출", momentum: "+9%", icon: "delivery-dining" },
];

const CommunityScreen = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOptionKey>("popular");

  const handleAskQuestion = () => {
    console.log("질문하기 버튼 클릭");
  };

  const filteredPosts = useMemo(() => {
    if (activeFilter === "latest") {
      return [...popularPosts].reverse();
    }

    if (activeFilter === "following") {
      return popularPosts.slice(0, 1);
    }

    return popularPosts;
  }, [activeFilter]);

  const handleQuickActionPress = (actionKey: string) => {
    if (actionKey === "question") {
      handleAskQuestion();
      return;
    }

    console.log(`${actionKey} 액션 클릭`);
  };

  return (
    <Container>
      <Header />
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <SectionSpacing>
          <HeroCard
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.25,
              shadowRadius: 12,
              elevation: 6,
            }}
          >
            <HeroBadge>
              <HeroBadgeText>AI 추천 토픽</HeroBadgeText>
            </HeroBadge>
            <HeroTitle>이번 주 인기 질문을 확인해보세요</HeroTitle>
            <HeroSubtitle>
              실제 사장님들의 성장 스토리와 전문가 조언이 실시간으로
              업데이트돼요.
            </HeroSubtitle>
          </HeroCard>
        </SectionSpacing>

        <SectionSpacing>
          <StatsRow>
            {communityStats.map((stat, index) => (
              <StatCard
                key={stat.label}
                style={{
                  marginRight: index === communityStats.length - 1 ? 0 : 12,
                }}
              >
                <StatLabel>{stat.label}</StatLabel>
                <StatValue>{stat.value}</StatValue>
              </StatCard>
            ))}
          </StatsRow>
        </SectionSpacing>

        <SectionSpacing>
          <SectionHeaderRow>
            <SectionTitle>빠른 액션</SectionTitle>
          </SectionHeaderRow>
          <QuickActionsCarousel
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 24 }}
          >
            <QuickActionsContent>
              {quickActions.map((action, index) => (
                <QuickActionCard
                  key={action.key}
                  onPress={() => handleQuickActionPress(action.key)}
                  activeOpacity={0.85}
                  style={[
                    index === quickActions.length - 1
                      ? { marginRight: 0 }
                      : null,
                    {
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 6 },
                      shadowOpacity: 0.08,
                      shadowRadius: 12,
                      elevation: 5,
                    },
                  ]}
                >
                  <QuickActionIcon>
                    <action.icon width={48} height={48} />
                  </QuickActionIcon>
                  <QuickActionTitle>{action.title}</QuickActionTitle>
                  <QuickActionSubtitle>
                    {action.description}
                  </QuickActionSubtitle>
                  <QuickActionCTA>{action.cta}</QuickActionCTA>
                </QuickActionCard>
              ))}
            </QuickActionsContent>
          </QuickActionsCarousel>
        </SectionSpacing>

        <SectionSpacing>
          <SectionHeaderRow>
            <SectionTitle>실시간 키워드</SectionTitle>
            <SectionAction activeOpacity={0.8}>
              <SectionActionText>더 보기</SectionActionText>
              <SectionActionIcon name="chevron-right" />
            </SectionAction>
          </SectionHeaderRow>
          {trendingTopics.map((topic) => (
            <TrendingCard key={topic.label}>
              <MaterialIcons
                name={topic.icon as any}
                size={24}
                color="#1B1B1B"
              />
              <TrendingInfo>
                <TrendingLabel>{topic.label}</TrendingLabel>
                <TrendingValue>{topic.momentum}</TrendingValue>
              </TrendingInfo>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color="#B0B0B0"
              />
            </TrendingCard>
          ))}
        </SectionSpacing>

        <SectionSpacing>
          <SectionHeaderRow>
            <SectionTitle>인기 이야기</SectionTitle>
            <SectionAction activeOpacity={0.8}>
              <SectionActionText>더 보기</SectionActionText>
              <SectionActionIcon name="chevron-right" />
            </SectionAction>
          </SectionHeaderRow>

          <CustomTab
            tabs={filterOptions}
            activeTab={activeFilter}
            onTabChange={(tabKey) => setActiveFilter(tabKey as FilterOptionKey)}
          />

          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <CardSpacing key={post.id}>
                <PopularPostCard post={post} />
              </CardSpacing>
            ))
          ) : (
            <EmptyState
              title="표시할 이야기가 없어요"
              description="새로운 질문이나 팔로우 중인 사장님을 추가해보세요."
              actionLabel="질문 작성하기"
              onAction={handleAskQuestion}
            />
          )}
        </SectionSpacing>

        <SectionSpacing>
          <SectionHeaderRow>
            <SectionTitle>전문가 Q&A</SectionTitle>
            <SectionAction activeOpacity={0.8}>
              <SectionActionText>더 보기</SectionActionText>
              <SectionActionIcon name="chevron-right" />
            </SectionAction>
          </SectionHeaderRow>
          {expertQAs.map((qa) => (
            <CardSpacing key={qa.id}>
              <ExpertQAItem qa={qa} />
            </CardSpacing>
          ))}
          <CTAButton onPress={handleAskQuestion} activeOpacity={0.85}>
            <CTAButtonText>전문가에게 질문하기</CTAButtonText>
          </CTAButton>
        </SectionSpacing>

        <SectionSpacing style={{ paddingBottom: 48 }}>
          <SectionHeaderRow>
            <SectionTitle>성장 랭킹</SectionTitle>
            <SectionAction activeOpacity={0.8}>
              <SectionActionText>더 보기</SectionActionText>
              <SectionActionIcon name="chevron-right" />
            </SectionAction>
          </SectionHeaderRow>
          {bossRankings.map((ranking) => (
            <CardSpacing key={ranking.id}>
              <BossRankingItem ranking={ranking} />
            </CardSpacing>
          ))}
        </SectionSpacing>
      </ScrollContainer>
    </Container>
  );
};

export default CommunityScreen;
