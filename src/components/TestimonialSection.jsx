import { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';

// TestimonialCard component
const TestimonialCard = ({ name, role, company, content, rating, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col relative border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300">
      {/* Quote mark decoration */}
      <div className="absolute top-6 right-6 text-4xl text-gray-100 font-serif">"</div>
      
      {/* Content */}
      <div className="mb-6 flex-grow">
        <p className="text-gray-700 italic relative z-10">{content}</p>
      </div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-[#cdaa6d] fill-[#cdaa6d]" : "text-gray-300"} 
          />
        ))}
      </div>
      
      {/* Author info */}
      <div className="flex items-center">
        {image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
            <span className="text-gray-500 font-medium text-xl">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">
            {role}{company ? `, ${company}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Static testimonials data
  const testimonials = [
    {
      name: "Harsh Aggarwal",
      role: "CEO",
      company: "Techkareer",
      content: "TaxesNation helped us optimize our tax strategy and saved us thousands. Their expertise in corporate tax law is exceptional.",
      rating: 5
    },
    {
      name: "Adarsh Goyal",
      role: "Startup Founder",
      company: "Neenva Innovations",
      content: "The team at TaxesNation guided us through the company registration process with ease. Their attention to detail and proactive approach made a complex process simple.",
      rating: 5
    },
    {
      name: "Shubham",
      role: "Freelancer",
      company: "",
      content: "Filing taxes as a freelancer was always confusing until I found TaxesNation. They provided clarity and helped me claim deductions I didn't even know existed.",
      rating: 4
    }
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
      id="testimonials"
      ref={sectionRef}
      className={`py-16 md:py-24 bg-gray-50 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#cdaa6d] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses and individuals across industries
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="transition-all duration-500"
                style={{
                  transitionDelay: `${index * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  image={testimonial.image}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No testimonials available at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;