import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteName = "QuizNet";
const siteDescription =
  "A calm quiz hub for personality quizzes, trivia, lifestyle quizzes, and shareable results.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://quiznet.example.com"),
  title: {
    default: `${siteName} | Simple Quizzes for Every Mood`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | Simple Quizzes for Every Mood`,
    description: siteDescription,
    images: ["/images/og-default.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Simple Quizzes for Every Mood`,
    description: siteDescription,
    images: ["/images/og-default.svg"]
  }
};

const navItems = [
  { href: "/quizzes", label: "All Quizzes" },
  { href: "/trending", label: "Trending" },
  { href: "/categories/personality", label: "Personality" },
  { href: "/categories/trivia", label: "Trivia" },
  { href: "/about", label: "About" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/" aria-label={`${siteName} home`}>
              <span className="brand-mark">QN</span>
              <span>{siteName}</span>
            </Link>
            <nav className="nav-scroll" aria-label="Primary navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <Link className="brand footer-brand" href="/">
                <span className="brand-mark">QN</span>
                <span>{siteName}</span>
              </Link>
              <p>
                Calm, friendly quizzes made for quick breaks, group chats, and
                easy sharing.
              </p>
            </div>
            <div className="footer-links">
              <Link href="/quizzes">All Quizzes</Link>
              <Link href="/trending">Trending</Link>
              <Link href="/about">About</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
