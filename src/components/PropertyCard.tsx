import { Star } from 'lucide-react';
import { Listing } from '../data/mockListings';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  listing: Listing;
}

export default function PropertyCard({ listing }: PropertyCardProps) {
  return (
    <Link to={`/property/${listing.id}`} className="cursor-pointer group">
      <div className="relative mb-3 overflow-hidden rounded-xl aspect-square">
        
        <img
          src={listing.image}
          alt={listing.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex items-start justify-between mb-1">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">
            {listing.location}
          </h3>
        </div>
        <div className="flex items-center flex-shrink-0 gap-1 ml-2">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium">{listing.rating}</span>
        </div>
      </div>

      <p className="mb-1 text-sm text-gray-600 truncate">{listing.type}</p>
      <p className="mb-2 text-sm text-gray-600 truncate">{listing.title}</p>

      <p className="text-gray-900">
        <span className="font-semibold">${listing.price}</span>
        <span className="font-normal text-gray-600"> night</span>
      </p>
    </Link>
 
    
    
  );
}
