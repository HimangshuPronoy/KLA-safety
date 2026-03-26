import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const slides = [
  {
    image: '/1.jpg',
    label: 'SRC Safety Nets',
    title: 'High-Quality\nSafety Solutions',
    sub: 'Balcony, Pigeon & Bird safety nets in Hyderabad. 12+ years of expert installation.',
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
  {
    image: '/5.jpg',
    label: 'Duct Area Nets',
    title: 'Secure Every\nCorner',
    sub: 'Cover open shafts and duct areas safely and effectively.',
    link: '/category/duct-area-safety-nets',
  },
  {
    image: '/10.jpg',
    label: 'Anti Bird Nets',
    title: 'Hygienic &\nBird-Free Spaces',
    sub: 'Keep your premises clean with our effective anti-bird solutions.',
    link: '/category/anti-bird-nets',
  },
  {
    image: '/sports2.jpg',
    label: 'Sports Nets',
    title: 'Practice With\nConfidence',
    sub: 'Heavy-duty cricket & sports practice nets for all levels.',
    link: '/category/sports-nets',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
      <button
        className="hero-slider__arrow hero-slider__arrow--prev"
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous"
      >&#8592;</button>
      <button
        className="hero-slider__arrow hero-slider__arrow--next"
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next"
      >&#8594;</button>
    </section>
  );
}
