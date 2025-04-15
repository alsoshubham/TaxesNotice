import { useEffect, useState, useRef } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ctaContent, setCtaContent] = useState({
    heading: "",
    description: "",
    buttons: [],
  });
  const sectionRef = useRef(null);

  // Fetch CTA content dynamically from an API
  useEffect(() => {
    const fetchCTAContent = async () => {
      try {
        const response = await fetch("/api/cta"); // Replace with your API endpoint
        const data = await response.json();
        setCtaContent(data);
      } catch (error) {
        console.error("Error fetching CTA content:", error);
      }
    };

    fetchCTAContent();
  }, []);

  // Intersection Observer to trigger animation on scroll
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

  return (
    <section
      ref={sectionRef}
      className={`bg-gradient-to-r from-blue-600 to-indigo-700 text-white transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {ctaContent.heading}
          </h2>
          <p className="text-lg mb-10 text-blue-100">
            {ctaContent.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {ctaContent.buttons.map((button, index) => (
              <button
                key={index}
                className={`${
                  button.type === "primary"
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "border-2 border-white text-white hover:bg-blue-700"
                } rounded-xl px-8 py-6 text-base font-medium`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
