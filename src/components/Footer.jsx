import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  FileText,
  Calculator,
  Building,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinkedin, SiMedium } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const services = [
    { name: "Tax Filing & ITR", icon: Calculator, href: "/services" },
    { name: "GST Services", icon: FileText, href: "/services" },
    { name: "Startup Registration", icon: Building, href: "/services" },
    { name: "Legal Consultation", icon: Users, href: "/services" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Learn & Resources", href: "/learn" },
    { name: "Contact Us", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ];

  const handleCallClick = () => {
    window.open("tel:+919540192363");
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I need help with tax and legal services. Can you assist me?"
    );
    window.open(`https://wa.me/919540192363?text=${message}`, "_blank");
  };

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email address to subscribe.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success(
      "Thank you for subscribing to our newsletter. You'll receive weekly tax tips and updates."
    );

    // Here you would typically send the email to your backend
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">TaxesNotice</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for tax compliance, legal services, and
              business growth. Simplifying complex regulations for individuals
              and businesses across India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <button
                  onClick={handleCallClick}
                  className="hover:text-white transition-colors"
                >
                  +91 9540 192 363
                </button>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href="mailto:hello@taxesnotice.com"
                  className="hover:text-white transition-colors"
                >
                  hello@taxesnotice.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Ranjit Nagar, New Delhi- 110008</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </Link>
              <Link
                to="https://medium.com/@taxesnotice"
                className="text-gray-400 hover:text-white"
              >
                <SiMedium size={24} />
              </Link>
              <Link to="https://www.linkedin.com/company/taxesnotice/" className="text-gray-400 hover:text-white">
                <SiLinkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold mt-6 mb-3">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get weekly tax tips and legal updates delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white font-semibold transition-colors"
              >
                Subscribe
              </button>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="mt-6 flex items-center space-x-2 text-green-400 hover:text-green-500 transition-colors text-sm"
              
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} TaxesNotice. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Professional Tax & Legal Services | Licensed & Certified
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
              <p>
                Designed and Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/alsoshubham"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  alsoshubham
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </footer>
  );
};

export default Footer;
