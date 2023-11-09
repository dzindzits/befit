import Icon from "../icon";

export default function Rating({ rating = 0 }: { rating?: number }) {
    const flooredRating = Math.floor(rating);
    const ceiledRating = Math.ceil(rating);
    const fullStarsCount = flooredRating;
    const halfStarsCount = +(flooredRating !== ceiledRating);
    const emptyStarsCount = 5 - ceiledRating;

    return (
        <div className="flex align-middle">
            <div className="flex">
                {[...Array(fullStarsCount)].map((index) => (
                    <Icon key={`full-star-${index}`} size="sm" fill>star</Icon>
                ))}
                {[...Array(halfStarsCount)].map((index) => (
                    <Icon key={`half-star-${index}`} size="sm">star_half</Icon>
                ))}
                {[...Array(emptyStarsCount)].map((index) => (
                    <Icon key={`empty-star-${index}`} size="sm">star</Icon>
                ))}
            </div>
            <span className="text-xs text-gray-400">({rating})</span>
        </div>
        
    )
}