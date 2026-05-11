export type QuizType = "personality" | "trivia" | "recommendation";

export type CategorySlug =
  | "personality"
  | "lifestyle"
  | "relationships"
  | "parenting"
  | "home"
  | "food"
  | "career"
  | "money"
  | "travel"
  | "pop-culture"
  | "trivia"
  | "seasonal";

export type QuizAnswer = {
  id: string;
  text: string;
  points?: Record<string, number>;
  correct?: boolean;
};

export type QuizQuestion = {
  id: string;
  text: string;
  answers: QuizAnswer[];
};

export type QuizResult = {
  slug: string;
  title: string;
  description: string;
  shareSummary: string;
  minScore?: number;
  maxScore?: number;
};

export type Quiz = {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  type: QuizType;
  tags: string[];
  image: string;
  estimatedMinutes: number;
  trending?: boolean;
  featured?: boolean;
  publishedAt: string;
  questions: QuizQuestion[];
  results: QuizResult[];
  seoTitle: string;
  seoDescription: string;
  facebookShareTitle: string;
  facebookShareDescription: string;
};
