const ResourceCenter = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 leading-tight">
      Resource Center
    </h1>
    <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-10">
      Explore our latest articles, guides, and resources to stay informed about tax, legal, and compliance topics.
    </p>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Example resource cards; replace with dynamic content as needed */}
      <div className="bg-white rounded-2xl shadow hover:shadow-lg p-8 flex flex-col items-start transition-all duration-300 border border-gray-100">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">How to File Your ITR Online</h2>
        <p className="text-gray-600 mb-4">A step-by-step guide to filing your Income Tax Return online in India.</p>
        <a href="#" className="text-blue-700 hover:underline font-medium mt-auto">Read More</a>
      </div>
      <div className="bg-white rounded-2xl shadow hover:shadow-lg p-8 flex flex-col items-start transition-all duration-300 border border-gray-100">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">GST Compliance Checklist</h2>
        <p className="text-gray-600 mb-4">Ensure your business meets all GST requirements with this comprehensive checklist.</p>
        <a href="#" className="text-blue-700 hover:underline font-medium mt-auto">Read More</a>
      </div>
      <div className="bg-white rounded-2xl shadow hover:shadow-lg p-8 flex flex-col items-start transition-all duration-300 border border-gray-100">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Legal Documents Every Startup Needs</h2>
        <p className="text-gray-600 mb-4">Essential legal documents and contracts for new businesses in India.</p>
        <a href="#" className="text-blue-700 hover:underline font-medium mt-auto">Read More</a>
      </div>
    </div>
  </div>
);

export default ResourceCenter;
