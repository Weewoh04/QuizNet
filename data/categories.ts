import type { CategorySlug } from "@/lib/types";

export const categories: Array<{
  slug: CategorySlug;
  name: string;
  description: string;
}> = [
  {
    slug: "personality",
    name: "Personality",
    description: "Easy quizzes for figuring out your patterns, preferences, and mood."
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    description: "Quick reads on routines, habits, weekends, and daily-life choices."
  },
  {
    slug: "relationships",
    name: "Relationships",
    description: "Shareable quizzes about friendship, communication, and connection."
  },
  {
    slug: "parenting",
    name: "Parenting",
    description: "Light, encouraging quizzes for parents and family life."
  },
  {
    slug: "home",
    name: "Home",
    description: "Decor, cleaning, hosting, organization, and comfort quizzes."
  },
  {
    slug: "food",
    name: "Food",
    description: "Taste, cravings, kitchen habits, and cozy food-personality quizzes."
  },
  {
    slug: "career",
    name: "Career",
    description: "Work style, motivation, strengths, and professional energy quizzes."
  },
  {
    slug: "money",
    name: "Money",
    description: "Gentle quizzes about budgeting style, priorities, and everyday finance."
  },
  {
    slug: "travel",
    name: "Travel",
    description: "Vacation moods, destination matches, road trips, and travel style."
  },
  {
    slug: "pop-culture",
    name: "Pop Culture",
    description: "Trending moments, nostalgic favorites, and entertainment quizzes."
  },
  {
    slug: "trivia",
    name: "Trivia",
    description: "Fast right-or-wrong quizzes for curious minds."
  },
  {
    slug: "seasonal",
    name: "Seasonal",
    description: "Holiday, weather, month, and seasonal mood quizzes."
  }
];

export const categoryMap = new Map(categories.map((category) => [category.slug, category]));
