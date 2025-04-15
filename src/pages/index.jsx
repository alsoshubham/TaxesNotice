import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute('href'));
      if (!target) return;

      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth',
      });
    };

    anchors.forEach((anchor) => anchor.addEventListener('click', handleClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick)); // Cleanup event listeners
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
