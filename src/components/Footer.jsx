import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import PrivacyPolicy from "../policies/PrivacyPolicy"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#002D72] text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4" aria-label="TaxNation Logo">
              TaxesNotice
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Expert tax and legal services for individuals and businesses. Your
              trusted partner in compliance and growth.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/tax-filing"
                  aria-label="Tax Filing Service"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tax Filing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/company-registration"
                  aria-label="Company Registration"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Company Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/services/legal-documentation"
                  aria-label="Legal Documentation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Legal Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business-advisory"
                  aria-label="Business Advisory"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Business Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  aria-label="About Us"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  aria-label="Our Team"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  aria-label="Careers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  aria-label="Blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Location</h5>
            <p className="text-gray-300 leading-relaxed">
              H.No. 8 1st Flr, Pvt 101, 102, Blk-C, Ranjit Nagar, Patel Nagar
              West, New Delhi, Central Delhi- 110008
            </p>
            <h5 className="text-lg font-semibold mt-6 mb-4">Follow Us</h5>
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
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © {currentYear}{""}
              <span className="font-semibold">TaxesNotice</span>. All rights
              reserved.
            </p>
            <p>
              Designed and Developed by{" "}
              <a
                href="https://www.linkedin.com/in/alsoshubham"
                className="text-gray-300 hover:text-white transition-colors">alsoshubham
              </a>  
            </p>
            <nav
              className="flex space-x-6 mt-4 md:mt-0"
              aria-label="Footer Navigation"
            >
              <Link
                to="/privacy"
                aria-label="/policies/policy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Privacy Policy/>
              </Link>
              <Link
                to="/terms"
                aria-label="Terms of Service"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
