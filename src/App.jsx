import router from "./router.jsx"; // Importing the router from router.jsx
import { RouterProvider } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <>
    <Helmet>
  <title>TaxesNotice - Expert Tax Consultancy & Legal Services in India</title>
  <meta name="description" content="TaxesNotice is your trusted platform for tax consultancy, GST filing, tax notice replies, legal drafting, and CA-led services in India. Book a free consultation today." />
  <meta name="keywords" content="Tax Consultancy India, Tax Notice Help, Income Tax Filing, GST Services, CA Services Online, Tax Lawyer India, Tax Compliance, Legal Drafting, Business Registration India, Freelance Tax Help, Online CA India, ITR Filing, GST Notice Response, Contracts and Agreements India, efiling tax, income efiling, income tax efiling, efile taxes india, efiling india, india tax efiling, income tax filing TaxesNotice, TaxesNotice itr filing, TaxesNotice itr efiling, itr filing fy 2024-25, income tax filing fy 2024-25, income tax login" />
  <meta name="author" content="TaxesNotice" />
  <meta property="og:title" content="TaxesNotice - Trusted Tax & Legal Services for Individuals & Businesses" />
  <meta property="og:description" content="Simplifying taxes and legal compliance for individuals, freelancers, and businesses in India. Get expert help for your tax filings, notices, and legal documents." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.taxesnotice.com" />
  <meta property="og:image" content="https://www.taxesnotice.com/og-image.jpg" />
</Helmet>
    <div className="min-h-screen bg-white">
     <RouterProvider router={router} />
    </div>
    </>
  );
}
export default App;