import { useEffect, useState, useRef } from 'react';

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
      question: 'What tax services do you provide for individuals?',
      answer:
        'We offer comprehensive tax services for individuals including tax planning, return preparation, audit support, tax dispute resolution, and advice on personal investments and property matters.',
    },
    {
      question: 'How can your services help my business with legal compliance?',
      answer:
        'Our legal compliance services ensure your business adheres to all regulatory requirements. We conduct compliance audits, develop compliance programs, handle regulatory filings, and provide ongoing advisory to keep your business in good standing.',
    },
    {
      question: 'What is the process for registering a new company?',
      answer:
        'Our company registration process involves an initial consultation to understand your needs, preparation of necessary documentation, submission to relevant authorities, obtaining tax registrations, and setting up compliance systems. We handle everything from start to finish.',
    },
    {
      question: 'Do you offer consultations for specific tax or legal issues?',
      answer:
        "Yes, we offer specialized consultations for specific tax and legal matters. Whether you're facing a unique tax situation or need legal advice on a particular issue, our experts can provide targeted guidance tailored to your circumstances.",
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We have expertise across various industries including technology, healthcare, real estate, retail, professional services, and manufacturing. Our team stays updated with industry-specific regulations to provide relevant advice.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={`section-padding bg-gray-50/50 transition-opacity duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white shadow-sm transition-all duration-500"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-600 text-base border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;