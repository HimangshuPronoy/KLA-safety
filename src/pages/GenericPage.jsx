import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './GenericPage.css';

const pageData = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: (
      <>
        <p>At SRC Safety Nets, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
        <h3>Information Collection</h3>
        <p>We collect information you provide directly to us when you request a quote, schedule an inspection, or contact our customer support. This includes your name, phone number, address, and email.</p>
        <h3>Use of Information</h3>
        <p>The information we collect is used solely to provide and improve our services, communicate with you regarding your installation, and ensure the safety of your premises.</p>
        <h3>Data Security</h3>
        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
        <p>By using our services, you consent to the collection and use of information in accordance with this policy.</p>
      </>
    )
  },
  'terms-conditions': {
    title: 'Terms & Conditions',
    content: (
      <>
        <p>Welcome to SRC Safety Nets. By accessing our website and utilizing our services, you agree to comply with and be bound by the following terms and conditions.</p>
        <h3>Service Agreement</h3>
        <p>All safety net installations are subject to a prior site inspection. The final quotation provided after the inspection is binding. Any additional requirements identified during installation may incur extra charges.</p>
        <h3>Warranty</h3>
        <p>We provide a standard warranty on our nets covering manufacturing defects and installation issues. Our warranty does not cover damage caused by unnatural forces, intentional cutting, or extreme weather conditions outside normal parameters.</p>
        <h3>Cancellations & Refunds</h3>
        <p>You may cancel your installation appointment up to 24 hours in advance without penalty. Materials custom-cut for your specific dimensions are non-refundable once the cutting process has commenced.</p>
      </>
    )
  },
  'about-us': {
    title: 'About SRC Safety Nets',
    content: (
      <>
        <p>At SRC Safety Nets, we specialize in high-quality safety solutions for balconies, windows, and open areas. With expert installation and durable materials, we ensure protection from birds, falls, and debris—making your home or workplace safer and more secure.</p>
        <p>With over 12+ years of industry experience, our team ensures safe and secure net installations for all residential and commercial needs in Hyderabad.</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.8' }}>
          <li><strong>Durable:</strong> We use weather-resistant materials that provide long-lasting protection.</li>
          <li><strong>Professional:</strong> Our installation team is highly trained and experienced.</li>
          <li><strong>Affordable:</strong> We offer customized solutions that provide great value for money.</li>
        </ul>
        <p>Our mission is to provide peace of mind to families and businesses by ensuring balconies, windows, staircases, and open ducts are 100% secure.</p>
      </>
    )
  },
  'faq': {
    title: 'Frequently Asked Questions',
    content: (
      <div className="faq-list">
        <h4>What types of safety nets do you offer?</h4>
        <p>We provide a wide range of solutions including balcony safety nets, anti-bird nets, pigeon nets, children safety nets, duct area covering, and construction safety nets.</p>
        <h4>Are the nets durable and weatherproof?</h4>
        <p>Yes, we use UV-stabilized, high-quality nylon and HDPE nets that are designed to withstand all weather conditions, from intense sunlight to heavy rain.</p>
        <h4>Do you provide free site inspection?</h4>
        <p>Absolutely! We offer a complimentary site visit and consultation to assess your specific needs and provide an accurate, no-obligation quote.</p>
        <h4>How long does installation take?</h4>
        <p>Most standard residential installations, such as balconies or windows, are completed within a few hours on the same day.</p>
        <h4>Will the nets block my view or sunlight?</h4>
        <p>No, our nets are designed to be minimally intrusive. We offer transparent and thin-filament options that preserve your view and allow natural light and fresh air to flow freely.</p>
      </div>
    )
  },
  'contact-us': {
    title: 'Contact Us',
    content: (
      <div className="contact-box">
        <p>We are ready to secure your space. Get in touch with our experts today!</p>
        <ul className="contact-details">
          <li><strong>Phone:</strong> <a href="tel:7816054341">+91 7816054341</a></li>
          <li><strong>Email:</strong> <a href="mailto:srcsafetynets@gmail.com">srcsafetynets@gmail.com</a></li>
          <li><strong>Location:</strong> Road No. 14, Greenpark Colony, Saroornagar, Hyderabad-36, T.S.</li>
        </ul>
        <div style={{ marginTop: '2rem' }}>
          <a href="https://api.whatsapp.com/send?phone=+917816054341" target="_blank" rel="noreferrer" className="generic-btn whatsapp-btn">Chat on WhatsApp</a>
        </div>
      </div>
    )
  },
  'free-inspection': {
    title: 'Book a Free Site Inspection',
    content: (
      <>
        <p>We offer a complimentary site visit anywhere in Hyderabad. Our experts will thoroughly measure your balconies, windows, or duct areas and provide a precise, no-obligation quotation on the spot.</p>
        <p>Call us now at <strong>+91 7816054341</strong> or chat with us on WhatsApp to schedule your free inspection today.</p>
        <div style={{ marginTop: '2rem' }}>
          <a href="tel:7816054341" className="generic-btn">Call to Book</a>
        </div>
      </>
    )
  },
  'why-choose-us': {
    title: 'Why Choose SRC Safety Nets?',
    content: (
      <>
        <p>Choosing the right safety net provider is critical for the well-being of your family. SRC Safety Nets stands out in Hyderabad for our unwavering commitment to quality and customer satisfaction.</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '10px' }}><strong>Premium Quality:</strong> We use high-tensile, UV-stabilized materials exclusively.</li>
          <li style={{ marginBottom: '10px' }}><strong>Expert Installation:</strong> Our technicians are trained to secure nets without damaging your property.</li>
          <li style={{ marginBottom: '10px' }}><strong>Prompt Service:</strong> We offer same-day installations and free site inspections.</li>
          <li style={{ marginBottom: '10px' }}><strong>Warranty Assured:</strong> All our installations come with a robust warranty.</li>
        </ul>
      </>
    )
  },
  'experience': {
    title: '12+ Years Experience',
    content: (
      <>
        <p>Experience matters when it comes to safety. For over 12 years, SRC Safety Nets has been at the forefront of the safety netting industry in Hyderabad.</p>
        <p>We have successfully completed thousands of installations across high-rise residential complexes, commercial buildings, and industrial sites. Our long-standing tenure means we have encountered and solved every type of structural challenge, allowing us to provide robust, fail-safe solutions for even the most complex duct areas and balconies.</p>
      </>
    )
  },
  'quality': {
    title: 'Premium Quality Materials',
    content: (
      <>
        <p>We believe that safety should never be compromised. Therefore, we utilize only the highest grade of materials for our safety nets.</p>
        <p>Our nets are made from high-density polyethylene (HDPE) and nylon, which are inherently resistant to wear, tear, and extreme weather conditions. They are UV-stabilized to prevent rapid degradation under the harsh sun, ensuring they remain strong and reliable for years to come.</p>
      </>
    )
  },
  'pricing': {
    title: 'Affordable Pricing',
    content: (
      <>
        <p>Top-tier safety doesn't have to break the bank. We strive to offer the most competitive pricing in the market without cutting corners on material quality or installation expertise.</p>
        <p>We provide transparent, upfront quotations during our free site inspections. The cost is generally calculated based on the square footage of the net required and the complexity of the installation. Contact us today for a free estimate!</p>
        <div style={{ marginTop: '2rem' }}>
          <a href="tel:7816054341" className="generic-btn">Get a Quote</a>
        </div>
      </>
    )
  },
  'solutions': {
    title: 'Customized Solutions',
    content: (
      <>
        <p>Every building is unique, and so are its safety requirements. We don't believe in one-size-fits-all approaches.</p>
        <p>Whether you need an irregularly shaped balcony netted off, a massive open duct secured, or a custom sports enclosure built on your terrace, our team custom-cuts and rigorously anchors the nets to perfectly fit the contours of your space.</p>
      </>
    )
  },
  'installation': {
    title: 'Same-Day Installation',
    content: (
      <>
        <p>We understand that when you need safety, you need it now. That's why we prioritize efficiency alongside quality.</p>
        <p>For most standard residential requirements, our dedicated teams can conduct a site inspection, provide a quote, and complete the installation all on the same day. Give us a call in the morning, and enjoy a secure balcony by the evening.</p>
      </>
    )
  }
};

export default function GenericPage() {
  let { pageId } = useParams();
  
  const data = pageData[pageId];
  
  const title = data ? data.title : (pageId || '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="generic-page">
      <Helmet>
        <title>{title} | SRC Safety Nets Hyderabad</title>
        <meta name="description" content={`Find out more about ${title} with SRC Safety Nets, your trusted safety solutions provider.`} />
      </Helmet>
      <div className="generic-page__container">
        <h1 className="generic-page__title">{title || 'Page Not Found'}</h1>
        <div className="generic-page__content">
          {data ? data.content : (
            <div className="generic-page__fallback">
              <p>Detailed information for <strong>{title}</strong> is currently being compiled by our team.</p>
              <p>Please check back later or call us directly at <strong>+91 7816054341</strong>.</p>
            </div>
          )}
        </div>
        <div className="generic-page__footer">
          <Link to="/" className="generic-btn outline-btn">Return to Home</Link>
        </div>
      </div>
    </div>
  );
}
