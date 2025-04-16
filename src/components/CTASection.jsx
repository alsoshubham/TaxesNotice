import { useEffect, useState, useRef } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ctaContent, setCtaContent] = useState({
    heading: "Take the Next Step",
    description: "Join us today and experience the best tax and legal solutions.",
    buttons: [
      { label: "Get Started", type: "primary" },
      { label: "Learn More", type: "secondary" },
    ],
  });
  const sectionRef = useRef(null);

  // Fetch CTA content dynamically from an API
  useEffect(() => {
    const fetchCTAContent = async () => {
      try {
        const response = await fetch("/api/cta"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch CTA content");
        }
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
      ref={sectionRef}
      className={`bg-gradient-to-r from-blue-600 to-indigo-700 text-white transition-opacity duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            {ctaContent.heading}
          </h2>
          <p className="text-lg md:text-xl mb-10 text-blue-100">
            {ctaContent.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {ctaContent.buttons.map((button, index) => (
              <button
                key={index}
                className={`px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 ${
                  button.type === "primary"
                    ? "bg-white text-blue-700 hover:bg-blue-50 shadow-md"
                    : "border-2 border-white text-white hover:bg-white hover:text-blue-700"
                }`}
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