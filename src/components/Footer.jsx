import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
  'Customer Care': [
    { label: 'Contact Us', href: '/page/contact-us' },
    { label: 'FAQ', href: '/page/faq' },
    { label: 'Free Inspection', href: '/page/free-inspection' },
    { label: 'Same-Day Installation', href: '/page/installation' },
    { label: 'Privacy Policy', href: '/page/privacy-policy' },
    { label: 'Terms & Conditions', href: '/page/terms-conditions' },
  ],
  Services: [
    { label: 'Balcony Safety Nets', href: '/category/balcony-safety-nets' },
    { label: 'Pigeon Safety Nets', href: '/category/pigeon-safety-nets' },
    { label: 'Anti Bird Nets', href: '/category/anti-bird-nets' },
    { label: 'Children Safety Nets', href: '/category/children-safety-nets' },
    { label: 'Duct Area Nets', href: '/category/duct-area-safety-nets' },
    { label: 'Invisible Grill', href: '/category/monkey-safety-nets' },
    { label: 'Pigeon Spikes', href: '/category/pigeon-spikes' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Sports Nets', href: '/category/sports-nets' },
  ],
  Information: [
    { label: 'About Us', href: '/page/about-us' },
    { label: 'Why Choose Us', href: '/page/why-choose-us' },
    { label: '12+ Years Experience', href: '/page/experience' },
    { label: 'Premium Quality', href: '/page/quality' },
    { label: 'Affordable Pricing', href: '/page/pricing' },
    { label: 'Customized Solutions', href: '/page/solutions' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* Main footer */}
      <div className="footer__main">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src="/logo2.png" alt="SRC Safety Nets" style={{ height: '50px' }} />
          </Link>
          <p className="footer__brand-text">
            High-quality safety solutions for balconies, windows, and open areas. Ensuring protection from birds, falls, and debris.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram" className="footer__social-link">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="footer__social-link">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="footer__social-link">
              <Youtube size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="footer__social-link">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="footer__col">
            <h4 className="footer__col-title">{heading}</h4>
            <ul className="footer__col-links">
              {links.map((linkObj) => (
                <li key={linkObj.label}>
                  <Link to={linkObj.href} className="footer__link">{linkObj.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <div className="footer__bottom-group">
            <p className="footer__copy">
              © {new Date().getFullYear()} SRC Safety Nets · All rights reserved
            </p>
            <p className="footer__design-credit">
              designed by <a href="https://www.norvare.consulting/" target="_blank" rel="noopener noreferrer">Norvare Consulting</a>
            </p>
          </div>
          <div className="footer__payment">
            <span className="footer__payment-label">Contact:</span>
            <div className="footer__payment-methods">
              <div className="payment-pill">+91 7816054341</div>
              <div className="payment-pill">srcsafetynets.in</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
