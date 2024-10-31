import { useState } from 'react';

interface RatingComponentProps {
  maxStars?: number;
  ratevalue: number;
}

const RatingComponent: React.FC<RatingComponentProps> = ({ maxStars = 5, ratevalue }) => {
  const [rating, setRating] = useState<number>(ratevalue);
  const [hover, setHover] = useState<number>(0);

  const handleRating = (rate: number) => setRating(rate);
  const handleHover = (rate: number) => setHover(rate);
  const handleMouseLeave = () => setHover(0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxStars)].map((_, index) => {
        const starIndex = index + 1;

        return (
          <svg
            key={starIndex}
            onClick={() => handleRating(starIndex)}
            onMouseEnter={() => handleHover(starIndex)}
            onMouseLeave={handleMouseLeave}
            className={`w-6 h-6 cursor-pointer transition-transform transform hover:scale-110 ${
              starIndex <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77 5.82 21l1.18-6.86-5-4.87 6.91-1.01L12 2z" />
          </svg>
        );
      })}
      <span className="ml-2 text-sm font-medium text-gray-700">
        {rating ? `${rating} / ${maxStars}` : 'No rating'}
      </span>
    </div>
  );
};

export default RatingComponent;
