export interface PopularPost {
  id: string;
  authorName: string;
  authorBusiness: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  daysAgo: string;
}

export interface ExpertQA {
  id: string;
  question: string;
  expertName: string;
  expertTitle: string;
  answer: string;
}

export interface BossRanking {
  id: string;
  rank: number;
  businessName: string;
  bossName: string;
  salesIncreaseRate: number;
}

