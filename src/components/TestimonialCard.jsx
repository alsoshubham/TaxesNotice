import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, company, content, rating, image }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full bg-white">
      <div className="p-6">
        {/* Rating Stars */}
        <div className="flex items-center mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
        </div>

        {/* Testimonial Content */}
        <p className="text-gray-700 mb-6 italic">&ldquo;{content}&rdquo;</p>

        {/* User Info */}
        <div className="flex items-center">
          {/* Profile Image or Initial */}
          <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
            {image ? (
              <img
                src={image}
                alt={`Profile picture of ${name}`}
                className="h-full w-full object-cover"
                aria-label={`Profile picture of ${name}`}
              />
            ) : (
              <div
                className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-600 font-semibold"
                aria-label={`Initial of ${name}`}
              >
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Name and Role */}
          <div>
            <p className="font-medium text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">
              {role}
              {company ? `, ${company}` : ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;