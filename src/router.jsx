import About from "./components/AboutSection";
import Layout from "./Layout";
import Services from "./components/ServicesSection";
import Testimonials from "./components/TestimonialsSection";
import FAQ from "./components/FAQSection";  
import Contact from "./components/ContactSection";
import PrivacyPolicy from "./policies/PrivacyPolicy";
import TermsOfServices from "./policies/TermsOfServices";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/testimonials",
        element: <Testimonials/>,
      },
      {
        path: "/faq",
        element: <FAQ/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path:"/OurTeams",
        element: <About/>
      },
      {
        path: "/policies",
        children: [
          {
            path: "/privacy",
            element: <PrivacyPolicy/>,
          },
          {
            path: "/termsOfService",
            element: <TermsOfServices/>,
          }
        ]
      }
    ],
  },
]);

export default router; // Changed to default export
