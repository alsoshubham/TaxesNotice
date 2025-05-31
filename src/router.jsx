import About from "./components/AboutSection";
import Layout from "./Layout";
import Services from "./components/ServiceSection";
import Testimonials from "./components/TestimonialSection";
import FAQ from "./components/FAQSection";  
import Contact from "./components/Contact";
import PrivacyPolicy from "./policies/PrivacyPolicy";
import TermsOfServices from "./policies/TermsOfServices";
import HeroSection from "./components/HeroSection";
import ResourceCenter from "./pages/ResourceCenter";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
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
        path: "/testimonial",
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
            path: "/policies/privacy",
            element: <PrivacyPolicy/>,
          },
          {
            path: "/policies/termsOfService",
            element: <TermsOfServices/>,
          }
        ]
      },
      {
        path: "/resources",
        element: <ResourceCenter />
      }
    ],
  },
]);

export default router; // Changed to default export
