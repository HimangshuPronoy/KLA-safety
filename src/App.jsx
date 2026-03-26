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
import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';
import WhyChooseUs from './components/WhyChooseUs';

function Home() {
  return (
    <>
      <Helmet>
        <title>SRC Safety Nets | Hyderabad's Top Safety Net Solutions</title>
        <meta name="description" content="Get premium quality safety nets in Hyderabad. We specialize in balcony nets, pigeon nets, and sports netting. Free inspection & same-day secure installation." />
      </Helmet>
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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
