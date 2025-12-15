import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  ChevronLeft,
  Share2,
  Heart,
  Users,
  Home,
  Bed,
  Bath,
  Wifi,
  Waves,
  Utensils,
  Wind,
  Car,
  Flame,
  Menu,
  Globe,
  User
} from 'lucide-react';
import { mockListings } from '../data/mockListings';
import Logo from "../assets/bnb-logo.png";

const amenityIcons: Record<string, React.ReactNode> = {
  'WiFi': <Wifi className="w-6 h-6" />,
  'Pool': <Waves className="w-6 h-6" />,
  'Kitchen': <Utensils className="w-6 h-6" />,
  'Air conditioning': <Wind className="w-6 h-6" />,
  'Free parking': <Car className="w-6 h-6" />,
  'Fireplace': <Flame className="w-6 h-6" />,
  'Heating': <Flame className="w-6 h-6" />,
};

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = mockListings.find((l) => l.id === id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  if (!listing) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-semibold">Property not found</h2>
          <Link to="/" className="text-rose-500 hover:underline">
            Back to listings
          </Link>
        </div>
      </div>
    );
  }

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const nights = calculateNights();
  const subtotal = nights * listing.price;
  const serviceFee = Math.round(subtotal * 0.14);
  const total = subtotal + serviceFee;

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    alert(`Reservation confirmed!\n\nProperty: ${listing.title}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nTotal: $${total}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Bnb Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold font-manrope text-rose-500">
                airbnb
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <button className="hidden px-4 py-2 text-sm font-medium transition-colors rounded-full md:block hover:bg-gray-100">
                Become a Host
              </button>
              <button className="p-3 transition-colors rounded-full hover:bg-gray-100">
                <Globe className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 transition-shadow border border-gray-300 rounded-full hover:shadow-md">
                <Menu className="w-4 h-4" />
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-6 text-gray-700 transition-colors hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back to listings</span>
        </button>

        <div className="mb-6">
          <h1 className="mb-2 text-3xl font-semibold">{listing.title}</h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium">{listing.rating}</span>
              <span className="text-gray-600">({listing.reviewCount} reviews)</span>
            </div>
            <span className="text-gray-600">{listing.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-12 overflow-hidden rounded-xl h-96">
          <div className="col-span-4 row-span-2 md:col-span-2">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="object-cover w-full h-full transition-all cursor-pointer hover:brightness-95"
            />
          </div>
          {listing.images.slice(1, 5).map((image, index) => (
            <div key={index} className="hidden md:block">
              <img
                src={image}
                alt={`${listing.title} ${index + 2}`}
                className="object-cover w-full h-full transition-all cursor-pointer hover:brightness-95"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12 mb-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="pb-8 border-b border-gray-200">
              <h2 className="mb-4 text-2xl font-semibold">
                {listing.type} hosted by {listing.host.name}
              </h2>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{listing.guests} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  <span>{listing.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5" />
                  <span>{listing.beds} beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5" />
                  <span>{listing.baths} baths</span>
                </div>
              </div>
            </div>

            <div className="py-8 border-b border-gray-200">
              <h3 className="mb-4 text-xl font-semibold">About this place</h3>
              <p className="leading-relaxed text-gray-700">{listing.description}</p>
            </div>

            <div className="py-8 border-b border-gray-200">
              <h3 className="mb-6 text-xl font-semibold">What this place offers</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {listing.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-gray-700">
                      {amenityIcons[amenity] || <Star className="w-6 h-6" />}
                    </div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-8">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={listing.host.avatar}
                  alt={listing.host.name}
                  className="object-cover w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">Hosted by {listing.host.name}</h3>
                  <p className="text-sm text-gray-600">Joined in {listing.host.joinedDate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="p-6 border border-gray-300 shadow-xl rounded-xl">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-2xl font-semibold">${listing.price}</span>
                  <span className="text-gray-600">night</span>
                </div>

                <div className="mb-4 overflow-hidden border border-gray-300 rounded-lg">
                  <div className="grid grid-cols-2">
                    <div className="p-3 border-b border-r border-gray-300">
                      <label className="block mb-1 text-xs font-semibold">CHECK-IN</label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full text-sm focus:outline-none"
                      />
                    </div>
                    <div className="p-3 border-b border-gray-300">
                      <label className="block mb-1 text-xs font-semibold">CHECK-OUT</label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full text-sm focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="p-3">
                    <label className="block mb-1 text-xs font-semibold">GUESTS</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full text-sm focus:outline-none"
                    >
                      {Array.from({ length: listing.guests }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleReserve}
                  className="w-full py-3 mb-4 font-semibold text-white transition-colors rounded-lg bg-rose-500 hover:bg-rose-600"
                >
                  Reserve
                </button>

                <p className="mb-4 text-sm text-center text-gray-600">
                  You won't be charged yet
                </p>

                {nights > 0 && (
                  <div className="pt-4 space-y-3 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="underline">${listing.price} x {nights} nights</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="underline">Service fee</span>
                      <span>${serviceFee}</span>
                    </div>
                    <div className="flex justify-between pt-3 text-lg font-semibold border-t border-gray-200">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4 mt-6">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-700 transition-colors rounded-lg hover:bg-gray-100">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-gray-700 transition-colors rounded-lg hover:bg-gray-100">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
