import { Star as StarIcon } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewsCount?: number;
}

const StarRating = ({ rating, reviewsCount }: StarRatingProps) => (
  <div className="flex items-center gap-1" aria-label={`Rated ${rating.toFixed(1)} out of 5`}>
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          className={`h-3 w-3 ${i < Math.round(rating) ? 'text-amber-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
    <span className="text-[11px] font-medium text-gray-700">{rating.toFixed(1)}</span>
    {reviewsCount !== undefined && (
      <span className="text-[11px] text-gray-400">({reviewsCount})</span>
    )}
  </div>
);

export default StarRating;