import { MapPin, Mail, Phone } from 'lucide-react';
import './PromoBar.css';

export default function PromoBar() {
  return (
    <div className="promo-bar">
      <div className="promo-bar__container">
        <div className="promo-bar__item">
          <Mail className="promo-bar__icon" size={28} strokeWidth={2} />
          <div className="promo-bar__content">
            <span className="promo-bar__label">E-Mail us:</span>
            <a href="mailto:klasafetynets@gmail.com" className="promo-bar__value">klasafetynets@gmail.com</a>
          </div>
        </div>

        <div className="promo-bar__item">
          <Phone className="promo-bar__icon" size={28} strokeWidth={2} />
          <div className="promo-bar__content">
            <span className="promo-bar__label">Call us:</span>
            <a href="tel:9100024252" className="promo-bar__value">+91 9100024252</a>
          </div>
        </div>

        <div className="promo-bar__item">
          <MapPin className="promo-bar__icon" size={28} strokeWidth={2} />
          <div className="promo-bar__content">
            <span className="promo-bar__label">Locate Us</span>
            <span className="promo-bar__value">Hyderabad</span>
          </div>
        </div>
      </div>
    </div>
  );
}
