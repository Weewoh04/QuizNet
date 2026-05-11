import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Quiz Harbor."
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container narrow prose-card">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p>
          This placeholder privacy policy should be reviewed before launch. It
          should describe analytics, advertising partners, affiliate links,
          cookies, email signup tools, and any data collected through forms.
        </p>
        <p>
          If you connect Google AdSense, Mediavine, Raptive, Ezoic, or another
          ad network, update this page with the required disclosures and cookie
          consent language.
        </p>
      </div>
    </section>
  );
}
