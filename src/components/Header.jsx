import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary" >
          TaxesNotice
        </Link>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-text-secondary hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-text-secondary hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/pricing" className="text-text-secondary hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/contact" className="text-text-secondary hover:text-primary transition-colors">
            Contact
          </Link>
        </nav> */}
        <nav>
          <ul className="flex justify-center items-center space-x-4">
            <li>
              <a href="#home" className="text-blue-500 hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="text-blue-500 hover:text-blue-700">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-blue-500 hover:text-blue-700">
                About
              </a>
            </li>
            <li>
              <a
                href="#Testimonial"
                className="text-blue-500 hover:text-blue-700"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a href="#Faq" className="text-blue-500 hover:text-blue-700">
                FAQ
              </a>
            </li>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white rounded hover:bg-blue-700">
                Book Consultations
              </button>
            </div>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-secondary focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="btn-secondary">
            Login
          </Link>
          <Link to="/get-started" className="btn-primary">
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-md">
          {/* <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/services"
              className="text-text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Services"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="About"
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="text-text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Pricing"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Contact"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="btn-secondary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/get-started"
              className="btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav> */}
          <nav>
          <ul className="flex justify-center items-center space-x-4">
            <li>
              <a href="#home" className="text-blue-500 hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="text-blue-500 hover:text-blue-700">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-blue-500 hover:text-blue-700">
                About
              </a>
            </li>
            <li>
              <a
                href="#Testimonial"
                className="text-blue-500 hover:text-blue-700"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a href="#Faq" className="text-blue-500 hover:text-blue-700">
                FAQ
              </a>
            </li>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white rounded hover:bg-blue-700">
                Book Consultations
              </button>
            </div>
          </ul>
        </nav>
        </div>
      )}
    </header>
  );
};