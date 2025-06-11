import { useState, useRef, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { CheckCircle, Users, Building, Star } from "lucide-react";

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
    "Continuous support throughout the process",
  ];

  // Stats data
  const values = [
    {
      icon: CheckCircle,
      title: "Accuracy First",
      description:
        "99.8% accuracy rate with zero compliance issues for our clients",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every solution is tailored to your unique business needs",
    },
    {
      icon: Building,
      title: "Expert Team",
      description:
        "Certified professionals with decades of combined experience",
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "500+ successful cases and growing",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-12 about-section bg-gradient-to-b from-white to-gray-50 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header with accent bar */}
        <div
          className={`flex flex-col items-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
            About TaxesNotice
          </h2>
          <div className="h-1 w-24 bg-[#cdaa6d] mb-6 rounded-full"></div>
          <p className="text-lg text-gray-500 text-center max-w-2xl">
            Your trusted partner in navigating the complex world of taxation and
            legal compliance.
          </p>
        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left column - About text */}
          <div
            className={`lg:w-1/2 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                TaxesNotice is a premier tax and legal consultancy dedicated to
                providing comprehensive solutions to individuals and businesses.
                With our team of experienced professionals, we navigate the
                complex landscape of taxation and legal requirements, ensuring
                our clients achieve peace of mind and compliance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our approach combines technical expertise with a deep
                understanding of various industries, allowing us to deliver
                tailored advice that addresses your specific challenges and
                opportunities. We pride ourselves on building long-term
                relationships based on trust, integrity, and exceptional
                service.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Why Choose Us
              </h3>
              <ul className="grid gap-3 mb-8">
                {benefitsList.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start transform transition-all duration-500 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
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
          <div
            className={`lg:w-1/2 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Stats grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center bg-white rounded-xl shadow-md border border-gray-100 p-8 transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#f5f5f5] mb-5">
                    <value.icon className="w-8 h-8 text-[#cdaa6d]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
