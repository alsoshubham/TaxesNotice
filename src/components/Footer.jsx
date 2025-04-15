import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-white">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" aria-label="TaxNation Logo">TaxNation</h3>
            <p className="text-secondary">
              Expert tax and legal services for individuals and businesses. Your trusted partner in compliance and growth.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/tax-filing" aria-label="Tax Filing Service" className="text-secondary hover:text-white transition-colors">
                  Tax Filing
                </Link>
              </li>
              <li>
                <Link to="/services/company-registration" aria-label="Company Registration" className="text-secondary hover:text-white transition-colors">
                  Company Registration
                </Link>
              </li>
              <li>
                <Link to="/services/legal-documentation" aria-label="Legal Documentation" className="text-secondary hover:text-white transition-colors">
                  Legal Documentation
                </Link>
              </li>
              <li>
                <Link to="/services/business-advisory" aria-label="Business Advisory" className="text-secondary hover:text-white transition-colors">
                  Business Advisory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" aria-label="About Us" className="text-secondary hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" aria-label="Our Team" className="text-secondary hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" aria-label="Careers" className="text-secondary hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" aria-label="Blog" className="text-secondary hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic space-y-2 text-secondary">
              <p>📞 +91 (555) 123-4567</p>
              <p>📧 info@taxnation.com</p>
              <p>
                📍 123 Business Ave, Suite 100
                <br />
                New Delhi, Delhi, India
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary">
              © {currentYear} TaxNation. All rights reserved.
            </p>
            <nav className="flex space-x-6 mt-4 md:mt-0" aria-label="Footer Navigation">
              <Link to="/privacy" aria-label="Privacy Policy" className="text-secondary hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" aria-label="Terms of Service" className="text-secondary hover:text-white transition-colors">
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
