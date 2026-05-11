import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { QuizCard } from "@/components/QuizCard";
import { QuizPlayer } from "@/components/QuizPlayer";
import { SectionHeading } from "@/components/SectionHeading";
import { ShareButtons } from "@/components/ShareButtons";
import { quizzes } from "@/data/quizzes";
import { absoluteUrl, getCategoryName, getQuizBySlug, getRelatedQuizzes } from "@/lib/quiz";

type QuizPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return quizzes.map((quiz) => ({ slug: quiz.slug }));
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    return {};
  }

  const url = absoluteUrl(`/quizzes/${quiz.slug}`);

  return {
    title: quiz.seoTitle,
    description: quiz.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: quiz.facebookShareTitle,
      description: quiz.facebookShareDescription,
      url,
      type: "article",
      images: [quiz.image]
    },
    twitter: {
      card: "summary_large_image",
      title: quiz.facebookShareTitle,
      description: quiz.facebookShareDescription,
      images: [quiz.image]
    }
  };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    notFound();
  }

  const related = getRelatedQuizzes(quiz);
  const quizPath = `/quizzes/${quiz.slug}`;

  return (
    <>
      <article className="section quiz-article">
        <div className="container content-with-sidebar">
          <div>
            <header className="quiz-header">
              <Link className="pill-link" href={`/categories/${quiz.category}`}>
                {getCategoryName(quiz.category)}
              </Link>
              <h1>{quiz.title}</h1>
              <p>{quiz.description}</p>
              <div className="meta-row">
                <span>{quiz.estimatedMinutes} min quiz</span>
                <span>{quiz.questions.length} questions</span>
                <span>{quiz.type}</span>
              </div>
              <ShareButtons
                url={quizPath}
                title={quiz.facebookShareTitle}
                description={quiz.facebookShareDescription}
              />
            </header>
            <AdSlot variant="top-banner" />
            <QuizPlayer quiz={quiz} quizUrl={quizPath} />
            <AdSlot variant="bottom-article" />
          </div>
          <aside className="desktop-sidebar">
            <AdSlot variant="sidebar" />
            <div className="sidebar-panel">
              <p className="eyebrow">More quizzes like this</p>
              {related.map((item) => (
                <Link key={item.slug} href={`/quizzes/${item.slug}`}>
                  {item.title}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </article>

      <section className="section muted">
        <div className="container">
          <SectionHeading title="Related quizzes" description="Keep going with more quick quiz breaks." />
          <div className="quiz-grid">
            {related.map((item) => (
              <QuizCard key={item.slug} quiz={item} />
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            name: quiz.title,
            description: quiz.description,
            url: absoluteUrl(quizPath),
            about: getCategoryName(quiz.category)
          })
        }}
      />
    </>
  );
}
