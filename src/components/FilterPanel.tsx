import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { mockListings } from '../data/mockListings';

interface FilterPanelProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  locations: string[];
  checkIn: string;
  checkOut: string;
  amenities: string[];
}

const allAmenities = Array.from(
  new Set(mockListings.flatMap((listing) => listing.amenities))
).sort();

const allLocations = Array.from(
  new Set(mockListings.map((listing) => listing.location))
).sort();

export default function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const [filters, setFilters] = useState<FilterState>({
    locations: [],
    checkIn: '',
    checkOut: '',
    amenities: [],
  });

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    location: false,
    dates: false,
    amenities: false,
  });

  const handleLocationToggle = (location: string) => {
    const newLocations = filters.locations.includes(location)
      ? filters.locations.filter((l) => l !== location)
      : [...filters.locations, location];
    const newFilters = { ...filters, locations: newLocations };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAmenityToggle = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity];
    const newFilters = { ...filters, amenities: newAmenities };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDateChange = (field: 'checkIn' | 'checkOut', value: string) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters: FilterState = {
      locations: [],
      checkIn: '',
      checkOut: '',
      amenities: [],
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const hasActiveFilters =
    filters.locations.length > 0 ||
    filters.checkIn ||
    filters.checkOut ||
    filters.amenities.length > 0;

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Filters</h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Clear filters
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggleSection('location')}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">Location</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  expandedSections.location ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.location && (
              <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 max-h-48 overflow-y-auto">
                <div className="space-y-2">
                  {allLocations.map((location) => (
                    <label
                      key={location}
                      className="flex items-center gap-3 cursor-pointer hover:bg-white p-2 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={filters.locations.includes(location)}
                        onChange={() => handleLocationToggle(location)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm text-gray-700">{location}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggleSection('dates')}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">Dates</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  expandedSections.dates ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.dates && (
              <div className="px-4 py-4 border-t border-gray-200 bg-gray-50 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={filters.checkIn}
                    onChange={(e) => handleDateChange('checkIn', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={filters.checkOut}
                    onChange={(e) => handleDateChange('checkOut', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggleSection('amenities')}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">Amenities</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  expandedSections.amenities ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.amenities && (
              <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 max-h-48 overflow-y-auto">
                <div className="space-y-2">
                  {allAmenities.map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center gap-3 cursor-pointer hover:bg-white p-2 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={filters.amenities.includes(amenity)}
                        onChange={() => handleAmenityToggle(amenity)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {hasActiveFilters && (
            <div className="pt-2">
              <button
                onClick={clearFilters}
                className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-lg transition-colors"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
