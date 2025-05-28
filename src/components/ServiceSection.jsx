import { useEffect, useState, useRef } from 'react';
import { FileText, Briefcase, FileCheck, BarChart2, ShieldCheck, Search } from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ServiceCard component defined inline
  const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-blue-100 h-full flex flex-col">
        <div className="flex justify-center items-center bg-blue-50 rounded-full w-16 h-16 mx-auto mb-4 text-[#cdaa6d]">
          {icon}
        </div>
        <div className="text-center flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>
      </div>
    );
  };

  // Static services data
  const services = [
    {
      icon: <FileText size={24} />,
      title: "Tax Filing & Advisory",
      description:
        "Strategic tax planning and accurate filing for individuals and businesses to minimize liability and ensure compliance.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Company Registration",
      description:
        "Complete assistance with company formation, registration, and statutory compliance for startups and new entities.",
    },
    {
      icon: <FileCheck size={24} />,
      title: "Legal Documentation",
      description:
        "Professional preparation and review of legal documents including contracts, agreements, and corporate filings.",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Business Planning & Advisory",
      description:
        "Comprehensive business advisory services including strategy development, market analysis, and operational planning.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Compliance Services",
      description:
        "Ensuring your business meets all legal obligations and regulatory requirements across multiple jurisdictions.",
    },
    {
      icon: <Search size={24} />,
      title: "Tax Advisory & Audit Support",
      description:
        "Expert guidance on tax matters and support during audits to ensure compliance and minimize risks.",
    },
  ];

  const process = [
    { step: "01", title: "Consultation", desc: "Free 15-minute consultation to understand your needs" },
    { step: "02", title: "Documentation", desc: "Secure document collection with digital verification" },
    { step: "03", title: "Processing", desc: "Expert handling with real-time progress updates" },
    { step: "04", title: "Delivery", desc: "Timely completion with comprehensive support" }
  ];

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-16 md:py-24 transition-opacity duration-700 bg-gray-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#cdaa6d] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tax and legal solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
      <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How we work</h2>
              <p className="text-xl text-gray-600">Simple, transparent process from start to finish</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-[#002d72] text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {item.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-8" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </section>
  );
};

export default ServicesSection;