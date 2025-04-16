import About from "./components/AboutSection";
import Layout from "./Layout";
import Services from "./components/ServiceSection";
import Testimonials from "./components/TestimonialSection";
import FAQ from "./components/FAQSection";  
import Contact from "./components/Contact";
import PrivacyPolicy from "./policies/PrivacyPolicy";
import TermsOfServices from "./policies/TermsOfServices";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
            path: "/policies/privacy",
            element: <PrivacyPolicy/>,
          },
          {
            path: "/policies/termsOfService",
            element: <TermsOfServices/>,
          }
        ]
      }
    ],
  },
]);

export default router; // Changed to default export
