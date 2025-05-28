import { useEffect, useState, useRef } from "react";
import {
  ChevronDown,
  FileText,
  Shield,
  Building,
  Users,
  BarChart,
} from "lucide-react";

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

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

  const faqs = [
    {
      icon: <FileText size={20} />,
      question: "What tax services do you provide for individuals?",
      answer:
        "We offer comprehensive tax services for individuals including tax planning, return preparation, audit support, tax dispute resolution, and advice on personal investments and property matters.",
    },
    {
      icon: <FileText size={20} />,
      question: "How long does ITR filing take?",
      answer:
        "Most individual tax returns are completed within 2-3 business days after receiving all required documents.",
    },
    {
      icon: <Shield size={20} />,
      question: "How can your services help my business with legal compliance?",
      answer:
        "Our legal compliance services ensure your business adheres to all regulatory requirements. We conduct compliance audits, develop compliance programs, handle regulatory filings, and provide ongoing advisory to keep your business in good standing.",
    },
    {
      icon: <Building size={20} />,
      question: "What is the process for registering a new company?",
      answer:
        "Our company registration process involves an initial consultation to understand your needs, preparation of necessary documentation, submission to relevant authorities, obtaining tax registrations, and setting up compliance systems. We handle everything from start to finish.",
    },
    {
      icon: <Building size={20} />,
      question: "What documents do I need for company registration?",
      answer:
        "Required documents include PAN cards of directors, address proof, passport-size photos, and rental agreement or property documents for registered office.",
    },
    {
      icon: <Users size={20} />,
      question: "Do you offer consultations for specific tax or legal issues?",
      answer:
        "Yes, we offer specialized consultations for specific tax and legal matters. Whether you're facing a unique tax situation or need legal advice on a particular issue, our experts can provide targeted guidance tailored to your circumstances.",
    },
    {
      icon: <BarChart size={20} />,
      question: "What industries do you specialize in?",
      answer:
        "We have expertise across various industries including technology, healthcare, real estate, retail, professional services, and manufacturing. Our team stays updated with industry-specific regulations to provide relevant advice.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={`py-20 max-w-screen bg-[#ffffff] transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-[#f0f0f0] rounded-lg mb-4">
            <Shield className="w-8 h-8 text-[#cdaa6d]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our tax and legal services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "border border-blue-400 shadow-lg"
                  : "border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left px-6 py-5 font-medium flex justify-between items-center transition-colors ${
                  activeIndex === index
                    ? "bg-[#f0f0f0] text-[#333333]"
                    : "bg-[#f0f0f0] text-[#333333]"
                }`}
                aria-expanded={activeIndex === index}
              >
                <span className="flex items-center">
                  <span className="mr-4 text-[#cdaa6d]">{faq.icon}</span>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-white text-gray-600 border-t border-gray-100">
                  <p className="pl-10">{faq.answer}</p>

                  {/* CTA Button for each FAQ */}
                  <div className="mt-4 pl-10">
                    <button className="px-4 py-2 text-sm font-medium text-blue-400 hover:text-blue-800 hover:underline focus:outline-none flex items-center">
                      Learn more about this service
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-[#f0f0f0] text-black rounded-lg max-w-3xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-6">
              Our tax and legal experts are ready to provide personalized
              assistance with your specific needs.
            </p>
            <button className="bg-[#002d72] text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 shadow-md">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
