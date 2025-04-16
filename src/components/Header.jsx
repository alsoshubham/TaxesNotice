import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
        <Link to="/" className="text-2xl font-bold text-primary">
          TaxesNotice
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-blue-500 hover:text-blue-700 transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-blue-500 hover:text-blue-700 transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-blue-500 hover:text-blue-700 transition-colors">
            About
          </Link>
          <Link to="/Testimonial" className="text-blue-500 hover:text-blue-700 transition-colors">
            Testimonial
          </Link>
          <Link to="/Faq" className="text-blue-500 hover:text-blue-700 transition-colors">
            FAQ
          </Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Book Consultations
          </button>
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="#home"
              className="text-blue-500 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="#services"
              className="text-blue-500 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="#about"
              className="text-blue-500 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="#Testimonial"
              className="text-blue-500 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonial
            </Link>
            <Link
              to="#Faq"
              className="text-blue-500 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Consultations
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}