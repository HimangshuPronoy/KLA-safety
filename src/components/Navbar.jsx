import { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  {
    label: 'Balcony Safety Nets',
    id: 'balcony-safety-nets',
    sub: ['For Kids', 'For Pets', 'View All'],
  },
  {
    label: 'Pigeon Safety Nets',
    id: 'pigeon-safety-nets',
    sub: ['View All'],
  },
  {
    label: 'Anti Bird Nets',
    id: 'anti-bird-nets',
    sub: ['For Balconies', 'Bird Spikes', 'View All'],
  },
  {
    label: 'Children Safety Nets',
    id: 'children-safety-nets',
    sub: ['View All'],
  },
  {
    label: 'Duct Area Nets',
    id: 'duct-area-safety-nets',
    sub: ['View All'],
  },
  {
    label: 'Monkey Safety Nets',
    id: 'monkey-safety-nets',
    sub: ['View All'],
  },
  {
    label: 'Pigeon Spikes',
    id: 'pigeon-spikes',
    sub: ['View All'],
  },
  {
    label: 'Gallery',
    id: 'gallery',
    href: '/gallery',
    sub: [],
  },
  {
    label: 'Sports Nets',
    id: 'sports-nets',
    sub: ['Cricket', 'Football', 'Indoor', 'View All'],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  };

  return (
    <header className="navbar">
      {/* Top row */}
      <div className="navbar__top">
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link to="/" className="navbar__logo" onClick={closeMenus}>
          <img src="/logo2.png" alt="SRC Safety Nets" className="navbar__logo-img" style={{ height: '56px' }} />
        </Link>

        <div className="navbar__actions">
          {/* Icons removed per user request for service site */}
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="navbar__nav">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`navbar__nav-item ${activeDropdown === item.label ? 'is-active' : ''}`}
            onMouseEnter={() => item.sub.length > 0 && setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to={item.href || `/category/${item.id}`} className="navbar__nav-btn" onClick={closeMenus}>
              {item.label}
              {item.sub.length > 0 && <ChevronDown size={12} className="navbar__nav-chevron" />}
            </Link>
            {activeDropdown === item.label && item.sub.length > 0 && (
              <div className="navbar__dropdown">
                {item.sub.map((s) => (
                  <Link 
                    key={s} 
                    to={`/category/${item.id}`} 
                    className="navbar__dropdown-link"
                    onClick={closeMenus}
                  >
                    {s}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {/* Single "Our Services" group */}
          <div className="navbar__mobile-item">
            <button
              className="navbar__mobile-btn"
              onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
            >
              <span>Our Services</span>
              <ChevronDown size={14} className={mobileExpanded === 'services' ? 'rotated' : ''} />
            </button>
            {mobileExpanded === 'services' && (
              <div className="navbar__mobile-sub">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/category/${item.id}`}
                    className="navbar__mobile-sub-link"
                    onClick={closeMenus}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/page/about-us" className="navbar__mobile-btn" onClick={closeMenus}>About Us</Link>
          <Link to="/page/faq" className="navbar__mobile-btn" onClick={closeMenus}>FAQ</Link>
          <a href="tel:7816054341" className="navbar__mobile-btn" onClick={closeMenus}>📞 Call: +91 7816054341</a>
          <Link to="/contact" className="navbar__mobile-btn" onClick={closeMenus}>Free Inspection</Link>
        </div>
      )}

    </header>
  );
}
