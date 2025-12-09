import { Star } from 'lucide-react';
import { Listing } from '../data/mockListings';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  listing: Listing;
}

export default function PropertyCard({ listing }: PropertyCardProps) {
  return (
    <Link to={`/property/${listing.id}`} className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl aspect-square mb-3">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex justify-between items-start mb-1">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">
            {listing.location}
          </h3>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0 ml-2">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-medium text-sm">{listing.rating}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-1 truncate">{listing.type}</p>
      <p className="text-gray-600 text-sm mb-2 truncate">{listing.title}</p>

      <p className="text-gray-900">
        <span className="font-semibold">${listing.price}</span>
        <span className="font-normal text-gray-600"> night</span>
      </p>
    </Link>
  );
}
