import { useState, useRef, useEffect } from 'react';
import { 
  FaCheckCircle, 
  FaAward, 
  FaUsers, 
  FaProjectDiagram, 
  FaClock,
  FaChevronRight
} from "react-icons/fa";

export default function About() {
  // const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
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
  
  // List items with checkmarks
  const benefitsList = [
    "Expert team with 15+ years of experience",
    "Personalized solutions for your unique needs",
    "Transparent pricing with no hidden fees",
    "Timely service delivery and follow-up",
    "Continuous support throughout the process"
  ];
  
  // Stats data
  const stats = [
    { icon: FaClock, value: "15+", label: "Years of Experience", color: "blue" },
    { icon: FaUsers, value: "500+", label: "Clients Served", color: "green" },
    { icon: FaProjectDiagram, value: "300+", label: "Projects Completed", color: "purple" },
    { icon: FaAward, value: "20+", label: "Awards Won", color: "amber" }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className={`about-section py-20 bg-gradient-to-b from-white to-gray-50 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header with accent bar */}
        <div className={`flex flex-col items-center mb-16 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
            About TaxesNotice
          </h2>
          <div className="h-1 w-24 bg-[#cdaa6d] mb-6 rounded-full"></div>
          <p className="text-lg text-gray-500 text-center max-w-2xl">
            Your trusted partner in navigating the complex world of taxation and legal compliance.
          </p>
        </div>
        
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left column - About text */}
          <div className={`lg:w-1/2 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                TaxesNotice is a premier tax and legal consultancy dedicated to
                providing comprehensive solutions to individuals and businesses.
                With our team of experienced professionals, we navigate the
                complex landscape of taxation and legal requirements, ensuring our
                clients achieve peace of mind and compliance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our approach combines technical expertise with a deep
                understanding of various industries, allowing us to deliver
                tailored advice that addresses your specific challenges and
                opportunities. We pride ourselves on building long-term
                relationships based on trust, integrity, and exceptional service.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Us</h3>
              <ul className="grid gap-3 mb-8">
                {benefitsList.map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start transform transition-all duration-500 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <span className="mr-3 text-[#cdaa6d] mt-1">
                      <FaCheckCircle />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* <button 
                className={`group flex items-center bg-[#002d72] hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="mr-2">Learn More</span>
                <FaChevronRight className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </button> */}
            </div>
          </div>
          
          {/* Right column - Stats and image */}
          <div className={`lg:w-1/2 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => {
                const bgColor = 
                  stat.color === "blue" ? "bg-blue-50 border-blue-100" :
                  stat.color === "green" ? "bg-green-50 border-green-100" :
                  stat.color === "purple" ? "bg-purple-50 border-purple-100" :
                  "bg-amber-50 border-amber-100";
                
                const iconColor = 
                  stat.color === "blue" ? "text-blue-600" :
                  stat.color === "green" ? "text-green-600" :
                  stat.color === "purple" ? "text-purple-600" :
                  "text-amber-600";
                
                return (
                  <div 
                    key={index} 
                    className={`${bgColor} rounded-xl p-6 text-center border shadow-sm hover:shadow-md transition-all duration-500 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <stat.icon className={`${iconColor} text-3xl mx-auto mb-3`} />
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-gray-600 mt-1 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
            
            {/* Testimonial */}
            <div 
              className={`bg-[#ffffff] text-black p-8 rounded-xl shadow-lg relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="text-5xl text-[#cdaa6d] opacity-20 font-serif absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="italic text-lg mb-6">
                  TaxesNotice transformed our approach to tax planning. Their expertise saved us significant money while ensuring complete compliance. They're not just consultants; they're strategic partners in our success.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-start">Shubham</p>
                    <p className="text-[#cdaa6d] text-sm">PM, Neenva Innovations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}