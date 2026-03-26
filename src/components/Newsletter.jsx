import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__text">
          <p className="newsletter__eyebrow">Get in Touch</p>
          <h2 className="newsletter__title">Get the Perfect Netting Solution</h2>
          <p className="newsletter__sub">
            Enter your email or phone number and our team will get back to you with a free quotation.
          </p>
        </div>
        <div className="newsletter__form-wrap">
          {submitted ? (
            <div className="newsletter__success">
              <span className="newsletter__success-icon">✓</span>
              <p>Thank you! We'll contact you shortly.</p>
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="newsletter__input"
                placeholder="Enter your phone or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter__btn">Request Callback</button>
            </form>
          )}
          <p className="newsletter__disclaimer">
            Or call us directly at <strong>+91 7816054341</strong> for immediate assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
