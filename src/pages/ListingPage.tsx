import { useState } from "react";
import { Search, Menu, Globe, User } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import FilterPanel, { FilterState } from "../components/FilterPanel";
import { mockListings } from "../data/mockListings";
import { Link } from "react-router-dom";
import Logo from "../assets/bnb-logo.png";

export default function ListingPage() {
  const [filters, setFilters] = useState<FilterState>({
    locations: [],
    checkIn: "",
    checkOut: "",
    amenities: [],
  });

  

  const filteredListings = mockListings.filter((listing) => {
    if (
      filters.locations.length > 0 &&
      !filters.locations.includes(listing.location)
    ) {
      return false;
    }

    if (filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every((amenity) =>
        listing.amenities.includes(amenity)
      );
      if (!hasAllAmenities) {
        return false;
      }
    }

    return true;
  });

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

            <div className="items-center hidden gap-4 px-6 py-2 transition-shadow border border-gray-300 rounded-full shadow-sm cursor-pointer md:flex hover:shadow-md">
              <span className="text-sm font-medium">Anywhere</span>
              <div className="w-px h-6 bg-gray-300"></div>
              <span className="text-sm font-medium">Any week</span>
              <div className="w-px h-6 bg-gray-300"></div>
              <span className="text-sm text-gray-600">Add guests</span>
              <div className="p-2 rounded-full bg-rose-500">
                <Search className="w-4 h-4 text-white" />
              </div>
            </div>

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

      <FilterPanel onFilterChange={setFilters} />

      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold text-gray-900">
            {filteredListings.length > 0
              ? `${filteredListings.length} stays available`
              : "No stays match your filters"}
          </h1>
          <p className="text-gray-600">
            {filteredListings.length > 0
              ? "Discover entire homes and rooms perfect for any trip"
              : "Try adjusting your filters to find more options"}
          </p>
        </div>

        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredListings.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="mb-4 text-gray-600">
              Try changing your filters to see more options
            </p>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t border-gray-200">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="cursor-pointer hover:underline">Help Center</li>
                <li className="cursor-pointer hover:underline">
                  Safety information
                </li>
                <li className="cursor-pointer hover:underline">
                  Cancellation options
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Community</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="cursor-pointer hover:underline">
                  Support Afghan refugees
                </li>
                <li className="cursor-pointer hover:underline">
                  Combating discrimination
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Hosting</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="cursor-pointer hover:underline">Try hosting</li>
                <li className="cursor-pointer hover:underline">
                  Responsible hosting
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-12 text-sm text-gray-600 border-t border-gray-200 sm:flex-row">
            <p>© 2025 Airbnb Clone, Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="cursor-pointer hover:underline">Privacy</span>
              <span className="cursor-pointer hover:underline">Terms</span>
              <span className="cursor-pointer hover:underline">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
