import { categories } from "@/data/categories";
import { quizzes } from "@/data/quizzes";
import type { CategorySlug, Quiz, QuizResult } from "@/lib/types";

export function getQuizBySlug(slug: string) {
  return quizzes.find((quiz) => quiz.slug === slug);
}

export function getResultBySlug(quiz: Quiz, resultSlug: string) {
  return quiz.results.find((result) => result.slug === resultSlug);
}

export function getQuizzesByCategory(category: CategorySlug) {
  return quizzes.filter((quiz) => quiz.category === category);
}

export function getTrendingQuizzes(limit?: number) {
  const trending = quizzes.filter((quiz) => quiz.trending);
  return typeof limit === "number" ? trending.slice(0, limit) : trending;
}

export function getNewQuizzes(limit?: number) {
  const sorted = [...quizzes].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export function getQuizOfTheDay() {
  const dayIndex = Math.floor(Date.now() / 86400000) % quizzes.length;
  return quizzes[dayIndex];
}

export function getRelatedQuizzes(quiz: Quiz, limit = 4) {
  const sameCategory = quizzes.filter(
    (candidate) => candidate.slug !== quiz.slug && candidate.category === quiz.category
  );
  const sharedTags = quizzes.filter(
    (candidate) =>
      candidate.slug !== quiz.slug &&
      candidate.category !== quiz.category &&
      candidate.tags.some((tag) => quiz.tags.includes(tag))
  );
  const fallback = quizzes.filter(
    (candidate) =>
      candidate.slug !== quiz.slug &&
      !sameCategory.includes(candidate) &&
      !sharedTags.includes(candidate)
  );

  return [...sameCategory, ...sharedTags, ...fallback].slice(0, limit);
}

export function getCategoryName(category: CategorySlug) {
  return categories.find((item) => item.slug === category)?.name || category;
}

export function scoreQuiz(
  quiz: Quiz,
  selectedAnswers: Record<string, string>
): QuizResult {
  if (quiz.type === "trivia") {
    const score = quiz.questions.reduce((total, question) => {
      const answer = question.answers.find((item) => item.id === selectedAnswers[question.id]);
      return total + (answer?.correct ? 1 : 0);
    }, 0);

    return (
      quiz.results.find(
        (result) =>
          typeof result.minScore === "number" &&
          typeof result.maxScore === "number" &&
          score >= result.minScore &&
          score <= result.maxScore
      ) || quiz.results[0]
    );
  }

  const totals = new Map<string, number>();

  quiz.questions.forEach((question) => {
    const answer = question.answers.find((item) => item.id === selectedAnswers[question.id]);
    Object.entries(answer?.points || {}).forEach(([resultSlug, points]) => {
      totals.set(resultSlug, (totals.get(resultSlug) || 0) + points);
    });
  });

  const winningSlug =
    [...totals.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || quiz.results[0].slug;

  return getResultBySlug(quiz, winningSlug) || quiz.results[0];
}

export function absoluteUrl(path = "/") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://quiz-harbor.example.com";
  return new URL(path, base).toString();
}
