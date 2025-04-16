import router from "./router.jsx"; // Importing the router from router.jsx
import { RouterProvider } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <>
    <Helmet>
        <title>Taxes Notice</title>
        <meta name="description" content="Skynx Globals is a trusted Makhana exporter and supplier providing high-quality, organic Makhana sourced from India. We specialize in bulk Makhana for import-export with a focus on excellence, purity, and nutrition. Discover premium Makhana for healthy snacks, retail, and wholesale worldwide." />
        <meta name="keywords" content="Skynx Globals, Makhana Exporter, Premium Makhana Supplier, Organic Makhana, Fox Nuts, Lotus Seeds, Bulk Makhana Supplier, Wholesale Makhana Export, High-Quality Makhana, Indian Makhana Exporter, International Makhana Trade, Gluten-Free Snacks, Vegan Snacks, High-Protein Snacks, Indian Superfood" />
        <meta name="author" content="Skynx Globals" />
        <meta property="og:title" content="Skynx Globals - Premium Makhana Exporter & Supplier" />
      </Helmet>
    <div className="min-h-screen bg-white">
     <RouterProvider router={router} />
    </div>
    </>
  );
}
export default App;


// import Background from "./assets/Background.jpg"
// import Contact from "./components/Contact";
// export default function App() {
//   return (
//     <div>
//       {/* Header */}
//       <div className="header flex justify-between items-center bg-gray-900 text-white p-6 shadow-md">
//         <div>
//           <h1 className="text-3xl font-semibold">TaxesNotice</h1>
//         </div>
//         <nav>
//           <ul className="flex space-x-6">
//             <li>
//               <a href="#home" className="hover:text-blue-400 transition">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="hover:text-blue-400 transition">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="hover:text-blue-400 transition">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#Testimonial" className="hover:text-blue-400 transition">
//                 Testimonial
//               </a>
//             </li>
//             <li>
//               <a href="#Faq" className="hover:text-blue-400 transition">
//                 FAQ
//               </a>
//             </li>
//           </ul>
//         </nav>
//         <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition">
//           Book Consultations
//         </button>
//       </div>

//       {/* Hero Section */}
//       <div className="bg-blue-50 py-20">
//         <h1 className="text-5xl font-extrabold text-center text-blue-700">
//           Welcome to TaxesNotice
//         </h1>
//         <p className="text-center text-lg mt-6 text-gray-600">
//           We simplify complex tax and legal matters with personalized consultancy
//           services for individuals and businesses.
//         </p>
//         <div className="flex justify-center mt-10">
//           <img
//             src={Background}
//             alt="Placeholder"
//             className="rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3"
//           />
//         </div>
//         <div className="flex justify-center mt-10 space-x-4">
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
//             Book a Consultation
//           </button>
//           <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
//             Explore Services
//           </button>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="bg-gray-100 py-16">
//         <h2 className="text-4xl font-bold text-center text-blue-600">
//           Our Services
//         </h2>
//         <p className="text-center text-lg mt-4 text-gray-700">
//           Comprehensive tax and legal solutions tailored to your needs.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6">
//           {[
//             {
//               title: "Tax Filing & Advisory",
//               description:
//                 "Strategic tax planning and accurate filing for individuals and businesses to minimize liability and ensure compliance.",
//             },
//             {
//               title: "Company Registration",
//               description:
//                 "Complete assistance with company formation, registration, and statutory compliance for startups and new entities.",
//             },
//             {
//               title: "Legal Documentation",
//               description:
//                 "Professional preparation and review of legal documents including contracts, agreements, and corporate filings.",
//             },
//             {
//               title: "Business Planning & Advisory",
//               description:
//                 "Comprehensive business advisory services including strategy development, market analysis, and operational planning.",
//             },
//             {
//               title: "Compliance Services",
//               description:
//                 "Ensuring your business meets all legal obligations and regulatory requirements across multiple jurisdictions.",
//             },
//             {
//               title: "Tax Advisory & Audit Support",
//               description:
//                 "Expert guidance on tax matters and support during audits to ensure compliance and minimize risks.",
//             },
//           ].map((service, index) => (
//             <div
//               key={index}
//               className="bg-white text-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
//             >
//               <h3 className="text-2xl font-semibold text-blue-600">
//                 {service.title}
//               </h3>
//               <p className="mt-4 text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>nbv
//       </div>

//       {/* About Section */}
//       <div className="container mx-auto px-4 py-10 bg-gray-100 rounded-lg shadow-lg">
//         <h2 className="text-4xl font-bold text-start mt-10 text-blue-600">
//           About TaxesNotice
//         </h2>
//         <div className="flex flex-col md:flex-row justify-between text-lg mt-10">
//           <div className="md:w-2/3">
//             <p className="text-start mt-4 text-gray-700">
//               TaxesNotice is a premier tax and legal consultancy dedicated to
//               providing comprehensive solutions to individuals and businesses. With
//               our team of experienced professionals, we navigate the complex
//               landscape of taxation and legal requirements, ensuring our clients
//               achieve peace of mind and compliance.
//             </p>
//             <br />
//             <p className="text-gray-700">
//               Our approach combines technical expertise with a deep understanding of
//               various industries, allowing us to deliver tailored advice that
//               addresses your specific challenges and opportunities. We pride
//               ourselves on building long-term relationships based on trust,
//               integrity, and exceptional service.
//             </p>
//             <br />
//             <ul className="list-disc list-inside text-gray-700">
//               <li>Expert team with 15+ years of experience</li>
//               <li>Personalized solutions for your unique needs</li>
//               <li>Transparent pricing with no hidden fees</li>
//               <li>Timely service delivery and follow-up</li>
//               <li>Continuous support throughout the process</li>
//             </ul>
//             <br />
//             <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
//               Learn More
//             </button>
//           </div>
//           <div className="md:w-1/3 grid grid-cols-2 gap-6 mt-10 md:mt-0">
//             <div className="bg-white text-center p-6 rounded-lg shadow-md">
//               <p className="text-2xl font-bold text-blue-600">15+</p>
//               <p className="text-gray-700">Years Experience</p>
//             </div>
//             <div className="bg-white text-center p-6 rounded-lg shadow-md">
//               <p className="text-2xl font-bold text-blue-600">500+</p>
//               <p className="text-gray-700">Clients Served</p>
//             </div>
//             <div className="bg-white text-center p-6 rounded-lg shadow-md">
//               <p className="text-2xl font-bold text-blue-600">300+</p>
//               <p className="text-gray-700">Projects Completed</p>
//             </div>
//             <div className="bg-white text-center p-6 rounded-lg shadow-md">
//               <p className="text-2xl font-bold text-blue-600">10</p>
//               <p className="text-gray-700">Awards Won</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gray-50 py-10">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-blue-600">Why Choose Us?</h2>
//           <p className="mt-4 text-lg text-gray-700">
//             We provide expert advice and solutions tailored to your needs.
//           </p>
//           <p className="mt-2 text-lg text-gray-700">
//             Our team of professionals is here to assist you.
//           </p>
//           <p className="mt-2 text-lg text-gray-700">
//             Contact us today for a consultation!
//           </p>
//         </div>
//         <div className="flex justify-center mt-8">
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="bg-gray-50 py-10">
//         <h2 className="text-4xl font-bold text-center text-blue-600">Testimonials</h2>
//         <div className="mt-8 space-y-6">
//           <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-2xl">
//             <p className="text-lg text-gray-700 italic">
//               "TaxesNotice made my tax filing process so easy!"
//             </p>
//             <p className="mt-4 text-right text-blue-600 font-semibold">- John Doe</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-2xl">
//             <p className="text-lg text-gray-700 italic">
//               "Their team is very knowledgeable and helpful."
//             </p>
//             <p className="mt-4 text-right text-blue-600 font-semibold">- Jane Smith</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-2xl">
//             <p className="text-lg text-gray-700 italic">
//               "I highly recommend their services!"
//             </p>
//             <p className="mt-4 text-right text-blue-600 font-semibold">- Mark Johnson</p>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="bg-gray-50 py-10">
//         <h2 className="text-4xl font-bold text-center text-blue-600">
//           Frequently Asked Questions
//         </h2>
//         <p className="text-center text-lg mt-4 text-gray-700">
//           Answers to common questions about our services
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 px-6">
//           <div className="bg-white text-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
//             <h3 className="text-2xl font-semibold text-blue-600">
//               What is TaxesNotice?
//             </h3>
//             <p className="mt-4 text-gray-600">
//               TaxesNotice is a premier tax and legal consultancy dedicated to
//               providing comprehensive solutions to individuals and businesses.
//             </p>
//           </div>
//           <div className="bg-white text-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
//             <h3 className="text-2xl font-semibold text-blue-600">
//               How can I contact you?
//             </h3>
//             <p className="mt-4 text-gray-600">
//               You can contact us through our website or call us at (123) 456-7890.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Get in Touch Section */}
//       <div>
//         {/* <h2 className="text-3xl font-semibold text-center mt-10">
//           Get in Touch
//         </h2>
//         <p className="text-center text-lg mt-4">Have questions? We're here to help!</p>
//         <div className="flex justify-center mt-10">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Contact Us
//           </button>
//         </div> */}
//         <Contact/>
//       </div>

//       {/* Follow Us Section */}
//         <div className="bg-blue-50 py-10">
//           <h2 className="text-4xl font-bold text-center text-blue-600">Follow Us</h2>
//           <p className="text-center text-lg mt-4 text-gray-700">
//             Stay updated with our latest news, updates, and offers.
//           </p>
//           <div className="flex justify-center mt-8 space-x-4">
//             <a
//           href="https://facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition duration-300 flex items-center space-x-2"
//             >
//           <i className="fab fa-facebook"></i>
//           <span>Facebook</span>
//             </a>
//             <a
//           href="https://twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300 flex items-center space-x-2"
//             >
//           <i className="fab fa-twitter"></i>
//           <span>Twitter</span>
//             </a>
//             <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition duration-300 flex items-center space-x-2"
//             >
//           <i className="fab fa-instagram"></i>
//           <span>Instagram</span>
//             </a>
//             <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition duration-300 flex items-center space-x-2"
//             >
//           <i className="fab fa-linkedin"></i>
//           <span>LinkedIn</span>
//             </a>
//           </div>
//         </div>

//       {/* Footer */}
//       <div className="footer bg-gray-900 text-white py-8">
//          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//            <div>
//              <h2 className="text-xl font-bold">TaxesNotice</h2>
//              <p className="mt-4 text-gray-400">
//                Professional tax and legal consultancy services for individuals
//                and businesses.
//              </p>
//            </div>
//            <div>
//              <h2 className="text-xl font-bold">Services</h2>
//              <ul className="mt-4 space-y-2 text-gray-400">
//                <li>Tax Planning</li>
//                <li>Legal Documentation</li>
//                <li>Company Registration</li>
//                <li>Legal Consultancy</li>
//                <li>Compliance Services</li>
//              </ul>
//            </div>
//            <div>
//              <h2 className="text-xl font-bold">Company</h2>
//              <ul className="mt-4 space-y-2 text-gray-400">
//                <li>About Us</li>
//                <li>Our Team</li>
//                <li>Privacy Policy</li>
//                <li>Terms of Services</li>
//              </ul>
//            </div>
//            <div>
//              <h2 className="text-xl font-bold">Contact Us</h2>
//              <ul className="mt-4 space-y-2 text-gray-400">
//                <li>123 Business Avenue, Suite 500 New York, NY 10001</li>
//                <li>(555) 123-4567</li>
//                <li>contact@nexustax.com</li>
//              </ul>
//            </div>
//          </div>
//          <div className="text-center mt-8 text-gray-500">
//            &copy; 2025 TaxesNotice. All rights reserved.
//          </div>
//        </div>
//      </div>
//   );
// }
