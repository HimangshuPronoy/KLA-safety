import { Link } from 'react-router-dom';
import './FabricBanner.css';

export default function FabricBanner() {
  return (
    <section className="fabric-banner">
      <div className="fabric-banner__image-col">
        <img
          src="/8.jpg"
          alt="Professional Safety Net Installation by SRC Safety Nets"
          className="fabric-banner__img"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="fabric-banner__content">
        <p className="fabric-banner__eyebrow">Your Safety Is Our First Priority</p>
        <h2 className="fabric-banner__title">
          Get the Perfect Netting<br />Solution Today
        </h2>
        <p className="fabric-banner__text">
          Whether it's for your balcony, sports court, or duct area, we have the right nets for you. Call us for a free site inspection and consultation.
        </p>
        <div className="fabric-banner__actions">
          <a href="tel:7816054341" className="fabric-banner__btn fabric-banner__btn--primary">Call +91 7816054341</a>
          <Link to="/" className="fabric-banner__btn fabric-banner__btn--secondary">Explore Services</Link>
        </div>
      </div>
    </section>
  );
}
