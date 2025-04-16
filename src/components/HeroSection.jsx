import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import About from './AboutSection';
import Services from './ServiceSection';
import Testimonials from './TestimonialSection';
import FAQ from './FAQSection';
import Contact from './Contact';

const Home = () => {
  return(
    <>
      <Services/>
      <About/>
      <Contact/>
      <FAQ/>
      <Testimonials/>
    </>
  )
}
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      <div className="container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div
          className={`max-w-full mx-auto text-center transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-mer lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Tax & Legal Solutions for Your Peace of Mind
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We simplify complex tax and legal matters with personalized
            consultancy services for individuals and businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="gradient-cta px-8 py-6 text-base"
              onClick={() => navigate('/contact')}
            >
              Book a Consultation
            </button>
            <button
              className="outline-button px-8 py-6 text-base outline"
              onClick={() => navigate('/services')}
            >
              Explore Services <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <Home/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;