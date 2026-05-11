import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about QuizNet, a calm hub for friendly quizzes and shareable results."
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container narrow prose-card">
        <p className="eyebrow">About</p>
        <h1>Simple quizzes, easy breaks</h1>
        <p>
          QuizNet is a calm quiz hub for personality quizzes, lifestyle
          quizzes, trivia, home, food, travel, seasonal topics, and shareable
          results.
        </p>
        <p>
          The site is structured so new quizzes can be added quickly in one
          central data file while category pages, related links, metadata, and
          share URLs update through reusable templates.
        </p>
        <Link className="button primary" href="/quizzes">
          Browse quizzes
        </Link>
      </div>
    </section>
  );
}
