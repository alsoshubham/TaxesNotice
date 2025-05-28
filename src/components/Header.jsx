import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
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
      className={`fixed bg-gradient-to-r bg-[#002d72] w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-lg py-3" : "bg-[#002D72] py-5"
      }`}
      style={{
        background:
          "linear-gradient(90deg, #002d72 60%, #003366 100%)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link
          to="/"
          className="text-3xl font-extrabold text-white tracking-tight"
        >
          TaxesNotice
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-200 hover:text-white transition-colors font-medium px-2"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-200 hover:text-white transition-colors font-medium px-2"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-gray-200 hover:text-white transition-colors font-medium px-2"
          >
            About
          </Link>
          <Link
            to="/Testimonial"
            className="text-gray-200 hover:text-white transition-colors font-medium px-2"
          >
            Testimonial
          </Link>
          <Link
            to="/Faq"
            className="text-gray-200 hover:text-white transition-colors font-medium px-2"
          >
            FAQ
          </Link>
        </nav>
        <button
          className="hidden md:flex items-center gap-2 bg-[#002d72] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors shadow-md ml-6"
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
            className="text-gray-200 focus:outline-none p-2"
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
        <div className="md:hidden bg-gray-800 shadow-lg">
          <nav className="flex flex-col items-center space-y-3 py-4 px-4">
            <Link
              to="/"
              className="w-full text-center text-gray-200 hover:text-white transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="w-full text-center text-gray-200 hover:text-white transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="w-full text-center text-gray-200 hover:text-white transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/Testimonial"
              className="w-full text-center text-gray-200 hover:text-white transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonial
            </Link>
            <Link
              to="/Faq"
              className="w-full text-center text-gray-200 hover:text-white transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <button
              className="w-full mt-2 flex items-center justify-center gap-2 bg-[#002d72] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors shadow-md"
              onClick={() => window.open("tel:+919540192363", "_blank")}
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold tracking-wide">
                +91 9540 192 363
              </span>
            </button>
            <button
              className="w-full mt-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/contact");
              }}
            >
              Book Consultations
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
