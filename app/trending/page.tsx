import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { QuizCard } from "@/components/QuizCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getNewQuizzes, getTrendingQuizzes } from "@/lib/quiz";

export const metadata: Metadata = {
  title: "Trending Quizzes",
  description: "Take the most popular shareable quizzes on QuizNet."
};

export default function TrendingPage() {
  const trending = getTrendingQuizzes();
  const fallback = trending.length ? trending : getNewQuizzes(8);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Popular now"
          title="Trending quizzes"
          description="Quick, friendly quizzes designed for sharing with friends."
        />
        <AdSlot variant="top-banner" />
        <div className="quiz-grid">
          {fallback.map((quiz) => (
            <QuizCard key={quiz.slug} quiz={quiz} />
          ))}
        </div>
      </div>
    </section>
  );
}
