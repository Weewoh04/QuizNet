import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { CategoryCard } from "@/components/CategoryCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { QuizCard } from "@/components/QuizCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories } from "@/data/categories";
import { quizzes } from "@/data/quizzes";
import { getNewQuizzes, getQuizOfTheDay, getTrendingQuizzes } from "@/lib/quiz";

export default function HomePage() {
  const trending = getTrendingQuizzes(6);
  const newest = getNewQuizzes(6);
  const quizOfTheDay = getQuizOfTheDay();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Quiz Harbor</p>
            <h1>Simple Quizzes for Every Mood</h1>
            <p>
              Take fun personality quizzes, trivia, lifestyle quizzes, and share
              your results with friends.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/quizzes">
                Browse Quizzes
              </Link>
              <Link className="button secondary" href="/trending">
                See Trending
              </Link>
            </div>
          </div>
          <div className="hero-feature">
            <span className="eyebrow">Quiz of the Day</span>
            <h2>{quizOfTheDay.title}</h2>
            <p>{quizOfTheDay.description}</p>
            <Link className="text-link" href={`/quizzes/${quizOfTheDay.slug}`}>
              Take today&apos;s quiz
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <AdSlot variant="top-banner" />
      </div>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Popular now"
            title="Trending quizzes"
            description="Easy picks for quick visits, repeat browsing, and Facebook sharing."
            href="/trending"
            linkLabel="View all trending"
          />
          <div className="trending-carousel">
            {trending.map((quiz) => (
              <QuizCard key={quiz.slug} quiz={quiz} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container content-with-sidebar">
          <div>
            <SectionHeading
              eyebrow="Fresh starts"
              title="New quizzes"
              href="/quizzes"
              linkLabel="Browse all"
            />
            <div className="quiz-grid">
              {newest.slice(0, 3).map((quiz) => (
                <QuizCard key={quiz.slug} quiz={quiz} />
              ))}
            </div>
            <AdSlot variant="in-feed" />
            <div className="quiz-grid">
              {newest.slice(3).map((quiz) => (
                <QuizCard key={quiz.slug} quiz={quiz} />
              ))}
            </div>
          </div>
          <aside className="desktop-sidebar">
            <AdSlot variant="sidebar" />
            <div className="sidebar-panel">
              <p className="eyebrow">More to explore</p>
              {trending.slice(0, 4).map((quiz) => (
                <Link key={quiz.slug} href={`/quizzes/${quiz.slug}`}>
                  {quiz.title}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Browse by topic"
            title="Quiz categories"
            description="Category pages create natural internal links as the quiz library grows."
          />
          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                {...category}
                count={quizzes.filter((quiz) => quiz.category === category.slug).length}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <NewsletterSignup />
          <AdSlot variant="bottom-article" />
        </div>
      </section>
    </>
  );
}
