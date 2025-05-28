import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

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
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
      style={{
        background: isScrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: isScrolled ? "0 2px 12px 0 rgba(0,0,0,0.04)" : "none"
      }}
    >
      <div className="logo container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link
          to="/"
          className="text-black text-xl font-sans-bold fontweight-bold"
        >
          TaxesNotice
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 bg-white/60 backdrop-blur-md rounded-full px-6 py-2 shadow-md">
          <Link
            to="/"
            className="text-black hover:text-blue-900 transition-colors font-medium px-2"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-black hover:text-blue-900 transition-colors font-medium px-2"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-black hover:text-blue-900 transition-colors font-medium px-2"
          >
            About
          </Link>
          <Link
            to="/Testimonial"
            className="text-black hover:text-blue-900 transition-colors font-medium px-2"
          >
            Testimonial
          </Link>
          <Link
            to="/Faq"
            className="text-black hover:text-blue-900 transition-colors font-medium px-2"
          >
            FAQ
          </Link>
        </nav>
        <button
          className="hidden md:flex items-center gap-2 bg-[#327ae437] backdrop-blur-md rounded-full px-6 py-2 shadow-md text-black font-semibold hover:bg-white/80 hover:text-blue-900 transition-colors ml-6"
          onClick={() => window.open("tel:+919540192363", "_blank")}
        >
          <Phone className="w-4 h-4" />
          <span className="font-semibold tracking-wide">
            +91 9540 192 363
          </span>
        </button>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md rounded-2xl mx-2 mt-2 shadow-lg">
          <nav className="flex flex-col items-center space-y-3 py-4 px-4">
            <Link
              to="/"
              className="w-full text-center text-black hover:text-blue-900 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="w-full text-center text-black hover:text-blue-900 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="w-full text-center text-black hover:text-blue-900 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/Testimonial"
              className="w-full text-center text-black hover:text-blue-900 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonial
            </Link>
            <Link
              to="/Faq"
              className="w-full text-center text-black hover:text-blue-900 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <button
              className="w-full mt-2 flex items-center justify-center gap-2 bg-white/60 backdrop-blur-md rounded-full px-6 py-2 shadow-md text-black font-semibold hover:bg-white/80 hover:text-blue-900 transition-colors"
              onClick={() => window.open("tel:+919540192363", "_blank")}
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold tracking-wide">
                +91 9540 192 363
              </span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
