export function NewsletterSignup() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div>
        <p className="eyebrow">Stay in the loop</p>
        <h2 id="newsletter-title">Get new quizzes in your inbox</h2>
        <p>Newsletter signup placeholder for future email capture and repeat visits.</p>
      </div>
      <form className="newsletter-form">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input id="newsletter-email" type="email" placeholder="Email address" />
        <button type="button">Sign up</button>
      </form>
    </section>
  );
}
