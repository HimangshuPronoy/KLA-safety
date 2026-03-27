import { Helmet } from 'react-helmet-async';

const JsonLd = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SRC Safety Nets",
    "image": "https://srcsafetynets.in/logo2.png",
    "@id": "https://srcsafetynets.in",
    "url": "https://srcsafetynets.in",
    "telephone": "+917816054341",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Road No. 14, Greenpark Colony, Saroornagar",
      "addressLocality": "Hyderabad",
      "postalCode": "500036",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3512,
      "longitude": 78.5348
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/srcsafetynets",
      "https://www.instagram.com/srcsafetynets"
    ],
    "priceRange": "₹"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessData)}
      </script>
    </Helmet>
  );
};

export default JsonLd;
