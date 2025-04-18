import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

// Import components
import About from './AboutSection';
import Services from './ServiceSection';
import Testimonials from './TestimonialSection';
import FAQ from './FAQSection';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Services />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
    </>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
    <>
      <div
        ref={sectionRef}
        className="bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Expert Tax & Legal Solutions for Your Peace of Mind
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              We simplify complex tax and legal matters with personalized
              consultancy services for individuals and businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
              <button
                className="bg-blue-900 text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out shadow-lg flex items-center justify-center"
                onClick={() => navigate('/contact')}
              >
                Book a Consultation
              </button>
              <button
                className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 text-lg font-medium rounded-lg hover:bg-blue-50 transition duration-300 ease-in-out shadow-md flex items-center justify-center"
                onClick={() => navigate('/services')}
              >
                <span>Explore Services</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="flex justify-center space-x-6 mb-20">
              <Link to="#" className="text-gray-500 hover:text-blue-900 transition-colors duration-300">
                <FaFacebook size={24} />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-blue-900 transition-colors duration-300">
                <FaTwitter size={24} />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-blue-900 transition-colors duration-300">
                <FaInstagram size={24} />
              </Link>
              <Link
                to="https://medium.com/@taxesnotice"
                className="text-gray-500 hover:text-blue-900 transition-colors duration-300"
              >
                <SiMedium size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Home />
    </>
  );
};

export default HeroSection;