import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Quiz Harbor."
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container narrow prose-card">
        <p className="eyebrow">Terms</p>
        <h1>Terms of Use</h1>
        <p>
          These placeholder terms should be reviewed before launch. Quizzes are
          intended for entertainment and general-interest use only.
        </p>
        <p>
          Update this page with ownership, acceptable use, advertising,
          affiliate, limitation of liability, and contact details before
          publishing publicly.
        </p>
      </div>
    </section>
  );
}
