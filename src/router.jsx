import About from "./components/AboutSection";
import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router; // Changed to default export
