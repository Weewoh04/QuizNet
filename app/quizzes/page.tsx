import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { QuizCard } from "@/components/QuizCard";
import { SectionHeading } from "@/components/SectionHeading";
import { quizzes } from "@/data/quizzes";
import { getNewQuizzes } from "@/lib/quiz";

export const metadata: Metadata = {
  title: "All Quizzes",
  description: "Browse every personality quiz, trivia quiz, lifestyle quiz, and shareable result on QuizNet."
};

export default function AllQuizzesPage() {
  const allQuizzes = getNewQuizzes();

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow={`${quizzes.length} quizzes`}
          title="All quizzes"
          description="A growing library built for personality, lifestyle, trivia, home, food, travel, and seasonal quizzes."
        />
        <AdSlot variant="top-banner" />
        <div className="quiz-grid">
          {allQuizzes.map((quiz) => (
            <QuizCard key={quiz.slug} quiz={quiz} />
          ))}
        </div>
        <AdSlot variant="bottom-article" />
      </div>
    </section>
  );
}
