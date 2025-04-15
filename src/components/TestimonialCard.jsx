import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  rating,
  image,
}) => {
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <CardContent className="pt-6">
        <div className="flex items-center mb-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
        </div>
        <p className="text-gray-700 mb-6 italic">&ldquo;{content}&rdquo;</p>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
            {image ? (
              <img
                src={image}
                alt={`Profile picture of ${name}`}
                className="h-full w-full object-cover"
                aria-label={`Profile picture of ${name}`}
              />
            ) : (
              <div
                className="h-full w-full flex items-center justify-center bg-navy-200 text-navy-600 font-semibold"
                aria-label={`Initial of ${name}`}
              >
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <p className="font-medium text-navy-800">{name}</p>
            <p className="text-sm text-gray-500">
              {role}{company ? `, ${company}` : ''}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
