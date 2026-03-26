import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__main">
        {/* Left: text */}
        <div className="hero__content">
          <p className="hero__eyebrow">SRC SAFETY NETS</p>
          <h1 className="hero__title">
            High-Quality<br />Safety Solutions
          </h1>
          <p className="hero__subtitle">
            For balconies, windows, and open areas.<br />
            With 12+ years of expertise, we ensure protection from birds and falls.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="tel:7816054341" className="hero__cta">Call Us Now: +91 7816054341</a>
            <a 
              href="https://api.whatsapp.com/send?phone=+917816054341&text=Hi,%20SRC%20SAFETY%20NETS.%20-%20I%27m%20Interested%20in%20knowing%20price%20for%20the%20services%20you%20offer." 
              target="_blank" 
              rel="noreferrer" 
              className="hero__cta" 
              style={{ background: '#25D366', border: 'none' }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="hero__image-wrap">
          <img
            src="/1.jpg"
            alt="Premium Balcony Protection"
            className="hero__image"
          />
          <div className="hero__badge" style={{ bottom: '20px', left: '20px' }}>
            <span className="hero__badge-title">100% Quality</span>
            <span className="hero__badge-sub">Premium Nets</span>
          </div>
        </div>
      </div>

      {/* Sub-hero tiles */}
      <div className="hero__tiles">
        <div className="hero__tile hero__tile--dark">
          <img
            src="/2.jpg"
            alt="Pigeon Nets"
            className="hero__tile-img"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero__tile-content">
            <span className="hero__tile-label">Pigeon Nets</span>
            <h3 className="hero__tile-title">Keep birds away</h3>
            <a href="/category/pigeon-safety-nets" className="hero__tile-link">Learn more →</a>
          </div>
        </div>
        <div className="hero__tile">
          <img
            src="/3.jpg"
            alt="Children Safety"
            className="hero__tile-img"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero__tile-content hero__tile-content--light">
            <span className="hero__tile-label">Children Safety</span>
            <h3 className="hero__tile-title">Protect your loved ones</h3>
            <a href="/category/children-safety-nets" className="hero__tile-link hero__tile-link--dark">Learn more →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
