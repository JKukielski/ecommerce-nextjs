import './newsletterSignup.css';

const NewsletterSignup = () => {
  return (
    <div className="newsletter-container">
      <h1 className="newsletter-heading">Sign up to our newsletter</h1>
      <form action="" className="newsletter-form">
        <input
          className="newsletter-input"
          type="email"
          placeholder="Enter your email address..."
        />
        <button className="newsletter-cta">Sign Me Up!</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
