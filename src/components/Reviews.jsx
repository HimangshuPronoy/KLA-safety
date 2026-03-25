import { Star } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Rahul S.',
    location: 'Hyderabad, IN',
    rating: 5,
    text: 'Excellent service! The team was quick, professional, and ensured every corner of my balcony was safely covered. Highly recommended for families with kids.',
    product: 'Balcony Safety Nets',
  },
  {
    name: 'Priya M.',
    location: 'Secunderabad, IN',
    rating: 5,
    text: 'Very happy with their bird netting service. No more pigeon mess, and the balcony looks neat and clean. Great quality at an affordable price.',
    product: 'Pigeon Safety Nets',
  },
  {
    name: 'Amit V.',
    location: 'Hyderabad, IN',
    rating: 5,
    text: 'They provided a free inspection and same-day installation. The staff was courteous and well-trained. The nets feel strong and secure.',
    product: 'Children Safety Nets',
  },
];

function StarRow({ count }) {
  return (
    <div className="star-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? '#c8a96e' : 'none'}
          stroke={i < count ? '#c8a96e' : '#ccc'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__inner">
        {/* Trust bar */}
        <div className="reviews__trust">
          <div className="reviews__trust-score">
            <span className="reviews__trust-number">4.8</span>
            <div className="reviews__trust-meta">
              <StarRow count={5} />
              <span className="reviews__trust-label">Based on 7,481 Trustpilot reviews</span>
            </div>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">1,000+</span>
            <span className="reviews__trust-stat-label">Satisfied Customers</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">Durable</span>
            <span className="reviews__trust-stat-label">Premium Quality Nets</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">100%</span>
            <span className="reviews__trust-stat-label">Safety Guaranteed</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="reviews__header">
          <p className="reviews__eyebrow">Customer Stories</p>
          <h2 className="reviews__title">What our customers say</h2>
        </div>
        <div className="reviews__grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <StarRow count={r.rating} />
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__footer">
                <div>
                  <p className="review-card__name">{r.name}</p>
                  <p className="review-card__location">{r.location}</p>
                </div>
                <span className="review-card__product">{r.product}</span>
              </div>
            </div>
          ))}
        </div>

          {/* Removed trustpilot link */ }
      </div>
    </section>
  );
}
