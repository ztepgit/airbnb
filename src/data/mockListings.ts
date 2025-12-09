export interface Listing {
  id: string;
  title: string;
  type: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  host: {
    name: string;
    joinedDate: string;
    avatar: string;
  };
  amenities: string[];
  description: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Luxurious Beachfront Villa',
    type: 'Entire villa',
    location: 'Malibu, California',
    price: 450,
    rating: 4.9,
    reviewCount: 128,
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    ],
    host: {
      name: 'Sarah Johnson',
      joinedDate: 'January 2018',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    amenities: ['Ocean view', 'WiFi', 'Kitchen', 'Pool', 'Free parking', 'Air conditioning', 'Beach access', 'Hot tub'],
    description: 'Wake up to stunning ocean views in this luxurious beachfront villa. Perfect for families or groups looking for a relaxing getaway with direct beach access and modern amenities.',
    guests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 3,
  },
  {
    id: '2',
    title: 'Modern Downtown Loft',
    type: 'Entire loft',
    location: 'New York, New York',
    price: 220,
    rating: 4.8,
    reviewCount: 94,
    image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    ],
    host: {
      name: 'Michael Chen',
      joinedDate: 'March 2019',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Air conditioning', 'Elevator', 'City view'],
    description: 'Stylish loft in the heart of Manhattan with exposed brick walls and floor-to-ceiling windows. Walking distance to restaurants, theaters, and subway stations.',
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
  },
  {
    id: '3',
    title: 'Cozy Mountain Cabin',
    type: 'Entire cabin',
    location: 'Aspen, Colorado',
    price: 310,
    rating: 4.95,
    reviewCount: 156,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    images: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
    ],
    host: {
      name: 'Emily Rodriguez',
      joinedDate: 'December 2017',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
    amenities: ['Mountain view', 'WiFi', 'Kitchen', 'Fireplace', 'Free parking', 'Heating', 'Ski-in/Ski-out'],
    description: 'Escape to this charming mountain cabin surrounded by pine trees. Perfect for winter skiing or summer hiking, with a cozy fireplace and stunning mountain views.',
    guests: 6,
    bedrooms: 3,
    beds: 4,
    baths: 2,
  },
  {
    id: '4',
    title: 'Tropical Paradise Bungalow',
    type: 'Entire bungalow',
    location: 'Honolulu, Hawaii',
    price: 380,
    rating: 4.85,
    reviewCount: 72,
    image: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg',
    images: [
      'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg',
      'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg',
      'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
    ],
    host: {
      name: 'David Kim',
      joinedDate: 'July 2020',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    },
    amenities: ['Ocean view', 'WiFi', 'Kitchen', 'Garden', 'Free parking', 'Air conditioning', 'Outdoor shower'],
    description: 'Experience authentic Hawaiian living in this beautiful bungalow surrounded by tropical gardens. Steps away from pristine beaches and local restaurants.',
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 1,
  },
  {
    id: '5',
    title: 'Historic Brownstone Apartment',
    type: 'Entire apartment',
    location: 'Boston, Massachusetts',
    price: 195,
    rating: 4.7,
    reviewCount: 88,
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
    ],
    host: {
      name: 'Jessica Taylor',
      joinedDate: 'September 2019',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    },
    amenities: ['WiFi', 'Kitchen', 'Heating', 'Workspace', 'Historic architecture'],
    description: 'Charming apartment in a historic brownstone building. Close to universities, museums, and the Freedom Trail. Perfect for history enthusiasts.',
    guests: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1,
  },
  {
    id: '6',
    title: 'Desert Oasis Villa',
    type: 'Entire villa',
    location: 'Scottsdale, Arizona',
    price: 340,
    rating: 4.92,
    reviewCount: 110,
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
    images: [
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    ],
    host: {
      name: 'Robert Martinez',
      joinedDate: 'April 2018',
      avatar: 'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg',
    },
    amenities: ['Pool', 'WiFi', 'Kitchen', 'Free parking', 'Air conditioning', 'Outdoor dining', 'Fire pit'],
    description: 'Stunning desert villa with panoramic mountain views and a sparkling pool. Enjoy spectacular sunsets and star-filled nights in this peaceful retreat.',
    guests: 6,
    bedrooms: 3,
    beds: 4,
    baths: 2,
  },
  {
    id: '7',
    title: 'Waterfront Lake House',
    type: 'Entire house',
    location: 'Lake Tahoe, California',
    price: 425,
    rating: 4.88,
    reviewCount: 145,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
    ],
    host: {
      name: 'Amanda White',
      joinedDate: 'June 2017',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    },
    amenities: ['Lake view', 'WiFi', 'Kitchen', 'Fireplace', 'Free parking', 'Heating', 'Dock access', 'Kayaks'],
    description: 'Beautiful lakefront property with private dock and breathtaking views. Perfect for water sports in summer and cozy fireside evenings in winter.',
    guests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 3,
  },
  {
    id: '8',
    title: 'Urban Penthouse Suite',
    type: 'Entire penthouse',
    location: 'Miami, Florida',
    price: 520,
    rating: 4.93,
    reviewCount: 167,
    image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    ],
    host: {
      name: 'Carlos Diaz',
      joinedDate: 'February 2019',
      avatar: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg',
    },
    amenities: ['Ocean view', 'WiFi', 'Kitchen', 'Pool', 'Gym', 'Air conditioning', 'Balcony', 'Concierge'],
    description: 'Luxury penthouse with panoramic ocean views and access to world-class amenities. Steps from South Beach, fine dining, and nightlife.',
    guests: 6,
    bedrooms: 3,
    beds: 3,
    baths: 3,
  },
];
