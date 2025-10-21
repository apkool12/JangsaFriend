import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { FlatList, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  PopularPostCard,
  ExpertQAItem,
  BossRankingItem,
  Header,
} from "../components";
import { PopularPost, ExpertQA, BossRanking } from "../types/community";

interface ThemedProps {
  theme: DefaultTheme;
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
`;

const SectionContainer = styled.View`
  padding: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const ContentContainer = styled.View`
  padding-bottom: 90px; /* 하단 탭 높이만큼 패딩 */
`;

const SectionTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const AskQuestionButton = styled.TouchableOpacity`
  background-color: ${(props: ThemedProps) => props.theme.colors.primary};
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.md}px;
  align-items: center;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const AskQuestionButtonText = styled.Text`
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
    title: "인스타그램 광고 성공 사례",
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
      "답변: 월 매출의 5-10%를 시작점으로 고려하는 것이 좋습니다. 초기에는 소액으로 시작해서 효과를 측정한 후 점진적으로 늘려가는 것을 추천합니다.",
  },
  {
    id: "2",
    question: "소규모 카페 홍보 전략이 궁금합니다",
    expertName: "박소영 마케팅 컨설턴트",
    expertTitle: "마케팅 컨설턴트",
    answer:
      "답변: 지역 기반 SNS 마케팅과 로컬 인플루언서 협업이 효과적입니다. 특히 인스타그램과 카카오톡 채널을 활용한 마케팅을 추천합니다.",
  },
  {
    id: "3",
    question: "네이버 플레이스 순위 상승 방법은?",
    expertName: "김태훈 SEO 전문가",
    expertTitle: "SEO 전문가",
    answer:
      "답변: 리뷰 관리와 키워드 최적화가 중요합니다. 정기적인 리뷰 요청과 고객 만족도 향상에 집중하세요.",
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

const CommunityScreen = () => {
  const handleAskQuestion = () => {
    console.log("질문하기 버튼 클릭");
  };

  const renderPopularPost = ({ item }: { item: PopularPost }) => (
    <PopularPostCard post={item} />
  );

  const renderExpertQA = ({ item }: { item: ExpertQA }) => (
    <ExpertQAItem qa={item} />
  );

  const renderBossRanking = ({ item }: { item: BossRanking }) => (
    <BossRankingItem ranking={item} />
  );

  return (
    <Container>
      <Header />
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <ContentContainer>
          <SectionContainer>
            <SectionTitle>인기 게시글</SectionTitle>
            <FlatList
              data={popularPosts}
              renderItem={renderPopularPost}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>전문가 Q&A</SectionTitle>
            <FlatList
              data={expertQAs}
              renderItem={renderExpertQA}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
            <AskQuestionButton onPress={handleAskQuestion}>
              <AskQuestionButtonText>질문하기</AskQuestionButtonText>
            </AskQuestionButton>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>사장님 랭킹</SectionTitle>
            <FlatList
              data={bossRankings}
              renderItem={renderBossRanking}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </SectionContainer>
        </ContentContainer>
      </ScrollContainer>
    </Container>
  );
};

export default CommunityScreen;
