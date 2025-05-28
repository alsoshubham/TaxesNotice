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