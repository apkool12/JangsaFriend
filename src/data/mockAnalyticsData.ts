// 분석 탭용 목데이터
// 향후 API 연동 시 이 파일의 데이터를 실제 API 응답으로 교체

export interface KPIData {
  title: string;
  value: string;
  unit: string;
  change: number;
  badge: string;
}

export interface RankingData {
  keyword: string;
  naver: number;
  google: number;
  kakao: number;
}

export interface TrendData {
  date: string;
  value: number;
}

export interface ReviewData {
  date: string;
  count: number;
  rating: number;
}

export interface KeywordData {
  keyword: string;
  sentiment: "positive" | "negative" | "neutral";
  count: number;
}

// KPI 목데이터
export const mockKPIData: KPIData[] = [
  {
    title: "노출",
    value: "12,450",
    unit: "회",
    change: 15.2,
    badge: "도달",
  },
  {
    title: "클릭",
    value: "1,230",
    unit: "회",
    change: -3.1,
    badge: "노출",
  },
  {
    title: "방문/예약",
    value: "89",
    unit: "건",
    change: 8.5,
    badge: "클릭",
  },
  {
    title: "평균평점",
    value: "4.2",
    unit: "점",
    change: 0.3,
    badge: "리뷰",
  },
];

// 지도 랭킹 목데이터
export const mockRankingData: RankingData[] = [
  { keyword: "학하동 카페", naver: 3, google: 12, kakao: 5 },
  { keyword: "유성구 카페", naver: 8, google: 25, kakao: 15 },
  { keyword: "대전 카페", naver: 15, google: 45, kakao: 22 },
  { keyword: "원두 카페", naver: 5, google: 18, kakao: 8 },
  { keyword: "디저트 카페", naver: 12, google: 35, kakao: 20 },
];

// 검색 트렌드 목데이터 (최근 30일)
export const mockSearchTrendData: TrendData[] = [
  { date: "2024-01-01", value: 120 },
  { date: "2024-01-02", value: 135 },
  { date: "2024-01-03", value: 98 },
  { date: "2024-01-04", value: 156 },
  { date: "2024-01-05", value: 178 },
  { date: "2024-01-06", value: 145 },
  { date: "2024-01-07", value: 167 },
  { date: "2024-01-08", value: 189 },
  { date: "2024-01-09", value: 134 },
  { date: "2024-01-10", value: 201 },
  { date: "2024-01-11", value: 187 },
  { date: "2024-01-12", value: 165 },
  { date: "2024-01-13", value: 198 },
  { date: "2024-01-14", value: 223 },
  { date: "2024-01-15", value: 189 },
  { date: "2024-01-16", value: 156 },
  { date: "2024-01-17", value: 178 },
  { date: "2024-01-18", value: 201 },
  { date: "2024-01-19", value: 234 },
  { date: "2024-01-20", value: 198 },
  { date: "2024-01-21", value: 167 },
  { date: "2024-01-22", value: 189 },
  { date: "2024-01-23", value: 212 },
  { date: "2024-01-24", value: 245 },
  { date: "2024-01-25", value: 201 },
  { date: "2024-01-26", value: 178 },
  { date: "2024-01-27", value: 198 },
  { date: "2024-01-28", value: 223 },
  { date: "2024-01-29", value: 256 },
  { date: "2024-01-30", value: 234 },
];

// 리뷰 데이터 목데이터 (최근 30일)
export const mockReviewData: ReviewData[] = [
  { date: "2024-01-01", count: 3, rating: 4.2 },
  { date: "2024-01-02", count: 5, rating: 4.3 },
  { date: "2024-01-03", count: 2, rating: 4.1 },
  { date: "2024-01-04", count: 7, rating: 4.4 },
  { date: "2024-01-05", count: 4, rating: 4.2 },
  { date: "2024-01-06", count: 6, rating: 4.3 },
  { date: "2024-01-07", count: 8, rating: 4.5 },
  { date: "2024-01-08", count: 3, rating: 4.1 },
  { date: "2024-01-09", count: 5, rating: 4.2 },
  { date: "2024-01-10", count: 9, rating: 4.4 },
  { date: "2024-01-11", count: 4, rating: 4.3 },
  { date: "2024-01-12", count: 6, rating: 4.2 },
  { date: "2024-01-13", count: 7, rating: 4.4 },
  { date: "2024-01-14", count: 10, rating: 4.5 },
  { date: "2024-01-15", count: 5, rating: 4.3 },
  { date: "2024-01-16", count: 3, rating: 4.1 },
  { date: "2024-01-17", count: 8, rating: 4.4 },
  { date: "2024-01-18", count: 6, rating: 4.2 },
  { date: "2024-01-19", count: 9, rating: 4.5 },
  { date: "2024-01-20", count: 7, rating: 4.3 },
  { date: "2024-01-21", count: 4, rating: 4.2 },
  { date: "2024-01-22", count: 6, rating: 4.3 },
  { date: "2024-01-23", count: 8, rating: 4.4 },
  { date: "2024-01-24", count: 11, rating: 4.6 },
  { date: "2024-01-25", count: 5, rating: 4.3 },
  { date: "2024-01-26", count: 7, rating: 4.2 },
  { date: "2024-01-27", count: 9, rating: 4.4 },
  { date: "2024-01-28", count: 8, rating: 4.3 },
  { date: "2024-01-29", count: 12, rating: 4.5 },
  { date: "2024-01-30", count: 10, rating: 4.4 },
];

// 리뷰 키워드 목데이터
export const mockKeywordData: KeywordData[] = [
  { keyword: "친절한", sentiment: "positive", count: 15 },
  { keyword: "맛있는", sentiment: "positive", count: 23 },
  { keyword: "깔끔한", sentiment: "positive", count: 12 },
  { keyword: "대기시간", sentiment: "negative", count: 8 },
  { keyword: "비싼", sentiment: "negative", count: 5 },
  { keyword: "시끄러운", sentiment: "negative", count: 3 },
  { keyword: "편리한", sentiment: "positive", count: 18 },
  { keyword: "분위기", sentiment: "neutral", count: 14 },
  { keyword: "원두", sentiment: "neutral", count: 9 },
  { keyword: "디저트", sentiment: "neutral", count: 11 },
];
