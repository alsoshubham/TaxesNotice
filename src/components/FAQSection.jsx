import { useEffect, useState, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from  './ui/accordion';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const faqs = [
    {
      question: 'What tax services do you provide for individuals?',
      answer: 'We offer comprehensive tax services for individuals including tax planning, return preparation, audit support, tax dispute resolution, and advice on personal investments and property matters.'
    },
    {
      question: 'How can your services help my business with legal compliance?',
      answer: 'Our legal compliance services ensure your business adheres to all regulatory requirements. We conduct compliance audits, develop compliance programs, handle regulatory filings, and provide ongoing advisory to keep your business in good standing.'
    },
    {
      question: 'What is the process for registering a new company?',
      answer: 'Our company registration process involves an initial consultation to understand your needs, preparation of necessary documentation, submission to relevant authorities, obtaining tax registrations, and setting up compliance systems. We handle everything from start to finish.'
    },
    {
      question: 'Do you offer consultations for specific tax or legal issues?',
      answer: 'Yes, we offer specialized consultations for specific tax and legal matters. Whether you\'re facing a unique tax situation or need legal advice on a particular issue, our experts can provide targeted guidance tailored to your circumstances.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have expertise across various industries including technology, healthcare, real estate, retail, professional services, and manufacturing. Our team stays updated with industry-specific regulations to provide relevant advice.'
    },
  ];

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className={`section-padding bg-gray-50/50 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about our services
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`mb-4 border border-gray-100 rounded-xl bg-white p-2 shadow-sm transition-all duration-500`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                }}
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 px-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-4 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
