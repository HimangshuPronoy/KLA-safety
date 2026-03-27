import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';
import PromoBar from './components/PromoBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import FabricBanner from './components/FabricBanner';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import GenericPage from './pages/GenericPage';
import GalleryPage from './pages/GalleryPage';
import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';
import WhyChooseUs from './components/WhyChooseUs';
import WhatsAppButton from './components/WhatsAppButton';

import JsonLd from './components/JsonLd';

function Home() {
  return (
    <>
      <Helmet>
        <title>SRC Safety Nets | #1 Safety Net Solutions in Hyderabad</title>
        <meta name="description" content="Get premium quality safety nets in Hyderabad. We specialize in balcony nets, pigeon nets, children safety nets, and invisible grills. Same-day installation with 12+ years of experience." />
        <meta name="keywords" content="safety nets, balcony safety nets, pigeon safety nets, bird nets, children safety nets, invisible grills, sports nets, hyderabad safety nets, src safety nets" />
        <link rel="canonical" href="https://srcsafetynets.in/" />
        <meta property="og:title" content="SRC Safety Nets | Hyderabad's Top Safety Net & Invisible Grill Solutions" />
        <meta property="og:description" content="Expert balcony, pigeon, and children safety net installations. Specializing in high-tensile invisible grills across Hyderabad. Professional same-day service." />
      </Helmet>
      <JsonLd />
      <Hero />
      <WhyChooseUs />
      <Features />
      <Categories />
      <HowItWorks />
      <FabricBanner />
      <Reviews />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <Router>
      <CustomCursor />
      <SplashScreen />
      <PromoBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/page/:pageId" element={<GenericPage />} />
          <Route path="/contact" element={<GenericPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
