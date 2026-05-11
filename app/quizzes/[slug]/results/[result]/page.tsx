import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { QuizCard } from "@/components/QuizCard";
import { ShareButtons } from "@/components/ShareButtons";
import { quizzes } from "@/data/quizzes";
import { absoluteUrl, getQuizBySlug, getRelatedQuizzes, getResultBySlug } from "@/lib/quiz";

type ResultPageProps = {
  params: Promise<{ slug: string; result: string }>;
};

export function generateStaticParams() {
  return quizzes.flatMap((quiz) =>
    quiz.results.map((result) => ({
      slug: quiz.slug,
      result: result.slug
    }))
  );
}

export async function generateMetadata({ params }: ResultPageProps): Promise<Metadata> {
  const { slug, result: resultSlug } = await params;
  const quiz = getQuizBySlug(slug);
  const result = quiz ? getResultBySlug(quiz, resultSlug) : undefined;

  if (!quiz || !result) {
    return {};
  }

  const url = absoluteUrl(`/quizzes/${quiz.slug}/results/${result.slug}`);
  const title = `${result.title} | ${quiz.title}`;
  const description = result.shareSummary || result.description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [quiz.image]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [quiz.image]
    }
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { slug, result: resultSlug } = await params;
  const quiz = getQuizBySlug(slug);
  const result = quiz ? getResultBySlug(quiz, resultSlug) : undefined;

  if (!quiz || !result) {
    notFound();
  }

  const related = getRelatedQuizzes(quiz, 3);
  const resultPath = `/quizzes/${quiz.slug}/results/${result.slug}`;

  return (
    <section className="section">
      <div className="container narrow">
        <AdSlot variant="pre-results" />
        <article className="result-card result-page-card">
          <p className="eyebrow">Quiz result</p>
          <h1>{result.title}</h1>
          <p>{result.description}</p>
          <p className="share-summary">{result.shareSummary}</p>
          <ShareButtons
            url={resultPath}
            title={result.title}
            description={result.shareSummary}
            resultMode
            stickyMobile
          />
          <div className="button-row">
            <Link className="button primary" href="/quizzes">
              Take another quiz
            </Link>
            <Link className="button secondary" href={`/quizzes/${quiz.slug}`}>
              Retake this quiz
            </Link>
          </div>
        </article>
        <AdSlot variant="bottom-article" />
        <div className="related-stack">
          <h2>Suggested related quizzes</h2>
          <div className="quiz-grid">
            {related.map((item) => (
              <QuizCard key={item.slug} quiz={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
