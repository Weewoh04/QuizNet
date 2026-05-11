import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow prose-card">
        <p className="eyebrow">404</p>
        <h1>That quiz page wandered off.</h1>
        <p>
          Try the full quiz library or head back to the homepage for something
          fresh.
        </p>
        <div className="button-row">
          <Link className="button primary" href="/quizzes">
            Browse quizzes
          </Link>
          <Link className="button secondary" href="/">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
