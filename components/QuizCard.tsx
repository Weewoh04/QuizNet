import Link from "next/link";
import { getCategoryName } from "@/lib/quiz";
import type { Quiz } from "@/lib/types";

type QuizCardProps = {
  quiz: Quiz;
  compact?: boolean;
};

export function QuizCard({ quiz, compact = false }: QuizCardProps) {
  return (
    <article className={`quiz-card ${compact ? "compact" : ""}`}>
      <Link className="quiz-card-image" href={`/quizzes/${quiz.slug}`} aria-label={quiz.title}>
        <span>{getCategoryName(quiz.category)}</span>
      </Link>
      <div className="quiz-card-body">
        <div className="meta-row">
          <Link href={`/categories/${quiz.category}`}>{getCategoryName(quiz.category)}</Link>
          <span>{quiz.estimatedMinutes} min</span>
        </div>
        <h3>
          <Link href={`/quizzes/${quiz.slug}`}>{quiz.title}</Link>
        </h3>
        <p>{quiz.description}</p>
        <Link className="text-link" href={`/quizzes/${quiz.slug}`}>
          Take the quiz
        </Link>
      </div>
    </article>
  );
}
