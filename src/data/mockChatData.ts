// 챗봇 타입 정의
export interface ChatPrompt {
  id: string;
  title: string;
  icon: string;
  text: string;
}

export interface WeeklySummary {
  title: string;
  metrics: {
    label: string;
    value: string;
    change: number;
    icon: string;
  }[];
}

export interface ChatResponse {
  type: "text" | "data" | "action" | "report";
  content: any;
}

export interface DataMetric {
  label: string;
  value: string;
  change: number;
  icon: string;
}

export interface ActionItem {
  text: string;
  priority: "high" | "medium" | "low";
}

// 추천 프롬프트 목 데이터
export const mockChatPrompts: ChatPrompt[] = [
  {
    id: "1",
    title: "이번 주 분석",
    icon: "analytics",
    text: "이번 주 마케팅 성과를 분석해주세요",
  },
  {
    id: "2",
    title: "리뷰 요약",
    icon: "rate-review",
    text: "최근 고객 리뷰를 요약해주세요",
  },
  {
    id: "3",
    title: "노출 개선",
    icon: "lightbulb",
    text: "검색 노출을 늘리는 방법을 알려주세요",
  },
  {
    id: "4",
    title: "경쟁 분석",
    icon: "bar-chart",
    text: "경쟁업체와 비교분석해주세요",
  },
];

// 주간 요약 목 데이터
export const mockWeeklySummary: WeeklySummary = {
  title: "이번 주 마케팅 요약",
  metrics: [
    {
      label: "노출",
      value: "12,450회",
      change: 15.2,
      icon: "visibility",
    },
    {
      label: "클릭",
      value: "1,230회",
      change: -3.1,
      icon: "mouse",
    },
    {
      label: "평점",
      value: "4.2점",
      change: 0.3,
      icon: "star",
    },
  ],
};

// AI 응답 생성 함수
export const getChatResponse = (userMessage: string): ChatResponse => {
  const message = userMessage.toLowerCase();

  // 주간 분석 요청
  if (message.includes("이번 주") || message.includes("분석")) {
    return {
      type: "data",
      content: {
        title: "이번 주 마케팅 성과 분석",
        metrics: [
          {
            label: "노출",
            value: "12,450회",
            change: 15.2,
            icon: "visibility",
          },
          {
            label: "클릭",
            value: "1,230회",
            change: -3.1,
            icon: "mouse",
          },
          {
            label: "평점",
            value: "4.2점",
            change: 0.3,
            icon: "star",
          },
        ],
      },
    };
  }

  // 리뷰 분석 요청
  if (message.includes("리뷰")) {
    return {
      type: "text",
      content:
        "최근 20개의 리뷰를 분석한 결과, 긍정적 리뷰가 80%를 차지하고 있습니다.\n\n✅ 주요 긍정 키워드:\n• 친절한 서비스\n• 맛있는 음료\n• 깔끔한 분위기\n\n⚠️ 개선이 필요한 부분:\n• 피크타임 대기시간\n\n고객들이 가장 만족하는 부분은 직원의 친절함과 음료의 맛입니다.",
    };
  }

  // 개선 팁 요청
  if (
    message.includes("노출") ||
    message.includes("개선") ||
    message.includes("팁")
  ) {
    return {
      type: "action",
      content: {
        title: "이번 주 추천 액션",
        actions: [
          {
            text: "'데이트', '감성카페' 키워드로 리뷰 추가 작성",
            priority: "high" as const,
          },
          {
            text: "오후 2~4시 게시글 업로드 시간 유지",
            priority: "medium" as const,
          },
          {
            text: "경쟁업체 대비 가격 경쟁력 검토",
            priority: "low" as const,
          },
        ],
      },
    };
  }

  // 경쟁 분석 요청
  if (message.includes("경쟁") || message.includes("비교")) {
    return {
      type: "text",
      content:
        "반경 1km 내 3곳의 경쟁업체와 비교한 결과:\n\n📊 순위 현황:\n• 리뷰수: 2위\n• 평균 평점: 1위 🏆\n• 노출량: 평균 대비 +15%\n\n✅ 강점:\n• 높은 평점과 고객 만족도\n• 프리미엄 이미지\n\n⚠️ 개선점:\n• 리뷰 수 증가 필요",
    };
  }

  // 보고서 요청
  if (message.includes("보고서") || message.includes("리포트")) {
    return {
      type: "report",
      content: {
        title: "월간 마케팅 보고서",
        description:
          "이번 달 마케팅 성과와 다음 달 전략을 포함한 상세 보고서를 다운로드할 수 있습니다.",
        buttonText: "PDF 다운로드",
      },
    };
  }

  // 기본 응답
  return {
    type: "text",
    content:
      "죄송합니다. 더 구체적인 질문을 해주시면 정확한 분석 결과를 제공해드릴 수 있습니다.\n\n💡 추천 질문:\n• '이번 주 분석'\n• '리뷰 요약'\n• '노출 개선 팁'\n• '경쟁업체 비교'",
  };
};
