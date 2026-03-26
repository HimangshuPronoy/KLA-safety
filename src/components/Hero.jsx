import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const slides = [
  {
    image: '/1.jpg',
    label: 'SRC Safety Nets',
    title: 'High-Quality\nSafety Solutions',
    sub: 'Balcony, Pigeon & Bird safety nets in Hyderabad.\n12+ years of expert installation.',
    link: '/category/balcony-safety-nets',
  },
  {
    image: '/2.jpg',
    label: 'Pigeon Nets',
    title: 'Keep Birds\nAway for Good',
    sub: 'Durable pigeon and anti-bird nets for homes & offices.',
    link: '/category/pigeon-safety-nets',
  },
  {
    image: '/3.jpg',
    label: 'Children Safety',
    title: 'Protect Your\nLoved Ones',
    sub: 'Strong safety nets for balconies, windows & staircases.',
    link: '/category/children-safety-nets',
  },
  {
    image: '/4.jpg',
    label: 'Monkey Safety Nets',
    title: 'Block Unwanted\nIntrusions',
    sub: 'Heavy-duty nets to keep monkeys out of your property.',
    link: '/category/monkey-safety-nets',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(idx) {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  }

  const slide = slides[current];

  return (
    <section className="hero-slider">
      <div className={`hero-slider__slide ${animating ? 'hero-slider__slide--out' : 'hero-slider__slide--in'}`}>
        <img src={slide.image} alt={slide.title} className="hero-slider__img" />
        <div className="hero-slider__overlay" />
        <div className="hero-slider__content">
          <p className="hero-slider__label">{slide.label}</p>
          <h1 className="hero-slider__title">
            {slide.title.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p className="hero-slider__sub">{slide.sub}</p>
          <div className="hero-slider__actions">
            <a href="tel:7816054341" className="hero-slider__btn hero-slider__btn--primary">
              Call Now: +91 7816054341
            </a>
            <Link to={slide.link} className="hero-slider__btn hero-slider__btn--outline">
              Learn More →
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hero-slider__dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`hero-slider__dot ${idx === current ? 'hero-slider__dot--active' : ''}`}
            onClick={() => goTo(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="hero-slider__arrow hero-slider__arrow--prev" onClick={() => goTo((current - 1 + slides.length) % slides.length)} aria-label="Previous">&#8592;</button>
      <button className="hero-slider__arrow hero-slider__arrow--next" onClick={() => goTo((current + 1) % slides.length)} aria-label="Next">&#8594;</button>
    </section>
  );
}
