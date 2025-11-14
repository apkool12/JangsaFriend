import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { SectionList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  PopularPostCard,
  ExpertQAItem,
  BossRankingItem,
  Header,
  EmptyState,
} from "../components";
import { PopularPost, ExpertQA, BossRanking } from "../types/community";

interface ThemedProps {
  theme: DefaultTheme;
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
`;

const SectionContainer = styled.View`
  padding: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const SectionItemContainer = styled.View`
  padding-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: ${(props: ThemedProps) => props.theme.spacing.lg}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.lg}px;
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

type CommunityItem = PopularPost | ExpertQA | BossRanking;

type CommunitySection = {
  title: string;
  type: "popular" | "qa" | "ranking";
  data: CommunityItem[];
};

const communitySections: CommunitySection[] = [
  { title: "인기 게시글", type: "popular", data: popularPosts },
  { title: "전문가 Q&A", type: "qa", data: expertQAs },
  { title: "사장님 랭킹", type: "ranking", data: bossRankings },
];

const CommunityScreen = () => {
  const handleAskQuestion = () => {
    console.log("질문하기 버튼 클릭");
  };

  const hasContent = communitySections.some(
    (section) => section.data.length > 0
  );

  const renderSectionItem = ({
    item,
    section,
  }: {
    item: CommunityItem;
    section: CommunitySection;
  }) => {
    if (section.type === "popular") {
      return (
        <SectionItemContainer>
          <PopularPostCard post={item as PopularPost} />
        </SectionItemContainer>
      );
    }

    if (section.type === "qa") {
      return (
        <SectionItemContainer>
          <ExpertQAItem qa={item as ExpertQA} />
        </SectionItemContainer>
      );
    }

    return (
      <SectionItemContainer>
        <BossRankingItem ranking={item as BossRanking} />
      </SectionItemContainer>
    );
  };

  return (
    <Container>
      <Header />
      {hasContent ? (
        <SectionList<CommunityItem, CommunitySection>
          sections={communitySections}
          keyExtractor={(item) => item.id}
          renderItem={renderSectionItem}
          renderSectionHeader={({ section }) => (
            <SectionContainer>
              <SectionTitle>{section.title}</SectionTitle>
            </SectionContainer>
          )}
          renderSectionFooter={({ section }) =>
            section.type === "qa" ? (
              <SectionItemContainer>
                <AskQuestionButton onPress={handleAskQuestion}>
                  <AskQuestionButtonText>질문하기</AskQuestionButtonText>
                </AskQuestionButton>
              </SectionItemContainer>
            ) : null
          }
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 90,
          }}
        />
      ) : (
        <ContentContainer>
          <EmptyState
            title="아직 올라온 콘텐츠가 없어요"
            description="첫 번째 질문이나 게시글을 작성해 커뮤니티를 시작해보세요."
            actionLabel="질문 작성하기"
            onAction={handleAskQuestion}
          />
        </ContentContainer>
      )}
    </Container>
  );
};

export default CommunityScreen;
