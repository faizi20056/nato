import { MapPin, Plane } from 'lucide-react';

export default function FeaturedDeals() {
  const destinations = [
    { name: 'Honolulu Hawaii', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30891.jpg' },
    { name: 'Orlando', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30896.jpg' },
    { name: 'Myrtle Beach', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30901.jpg' },
    { name: 'New York', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30906.jpg' },
    { name: 'Bavaria - Germany', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30911.jpg' },
    { name: 'London U.K.', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30916.jpg' },
    { name: 'Jamaica', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30926.jpg' },
    { name: 'Dominican Republic', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30927.jpg' },
    { name: 'Bahamas', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30928.jpg' },
    { name: 'Miami Beach', subtitle: 'Hallandal Hollywood, Fort Lauderdale Beaches', image: 'https://cp.militaryfares.com/images/landing/30929.jpg' },
    { name: 'United Arab Emirates', subtitle: 'Dubai - Abu Dhabi - Rais Al Khaimah', image: 'https://cp.militaryfares.com/images/landing/30930.jpg' },
    { name: 'Copenhagen', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30933.jpg' },
    { name: 'Barcelona', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30934.jpg' },
    { name: 'Berlin', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30935.jpg' },
    { name: 'Baja California', subtitle: 'Loreto, La Paz, Cabo San Lucas', image: 'https://cp.militaryfares.com/images/landing/30937.jpg' },
    { name: 'San Francisco', subtitle: 'Special Military Discounts!', image: 'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Nashville', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30940.jpg' },
    { name: 'Boston', subtitle: 'Special Military Discounts!', image: 'https://cp.militaryfares.com/images/landing/30941.jpg' },
    { name: 'Sorrento, Capri, Amalfi', subtitle: 'Amazing Travel Deals & More', image: 'https://cp.militaryfares.com/images/landing/31019.jpg' },
  ];

  const flightDeals = [
    { route: 'LGA → PGV', dates: 'Oct 10 - Oct 13, 2025', airline: 'American Airlines', logo: 'https://www.gstatic.com/flights/airline_logos/70px/AA.png', travelers: '1 Traveler(s), Economy', price: '692.11' },
    { route: 'BNA → WAS', dates: 'Oct 4, 2025', airline: 'Delta Air Lines', logo: 'https://www.gstatic.com/flights/airline_logos/70px/DL.png', travelers: '1 Traveler(s), Economy', price: '257.98' },
    { route: 'AGS → DFW', dates: 'Dec 18, 2025 - Jan 2, 2026', airline: 'Delta Air Lines', logo: 'https://www.gstatic.com/flights/airline_logos/70px/DL.png', travelers: '1 Traveler(s), Economy', price: '507.55' },
    { route: 'LAX → MCO', dates: 'Dec 6 - Dec 16, 2025', airline: 'Delta Air Lines', logo: 'https://www.gstatic.com/flights/airline_logos/70px/DL.png', travelers: '2 Traveler(s), Economy', price: '490.16' },
    { route: 'SBN → LAS', dates: 'Oct 12, 2025', airline: 'Allegiant Air', logo: 'https://www.gstatic.com/flights/airline_logos/70px/G4.png', travelers: '1 Traveler(s), Economy', price: '121.14' },
    { route: 'PHX → MCO', dates: 'Oct 15 - Oct 18, 2025', airline: 'Southwest Airlines', logo: 'https://www.gstatic.com/flights/airline_logos/70px/WN.png', travelers: '1 Traveler(s), Economy', price: '502.96' },
    { route: 'FAT → SLC', dates: 'Nov 25 - Dec 1, 2025', airline: 'Delta Air Lines', logo: 'https://www.gstatic.com/flights/airline_logos/70px/DL.png', travelers: '2 Traveler(s), Economy', price: '730.22' },
    { route: 'SAN → DFW', dates: 'Oct 19 - Oct 20, 2025', airline: 'Frontier Airlines', logo: 'https://www.gstatic.com/flights/airline_logos/70px/F9.png', travelers: '1 Traveler(s), Economy', price: '287.34' },
  ];

  return (
    <>
      {/* Destinations Section */}
      <section className="py-16 lg:py-24 bg-white" id="destinations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{destination.name}</h3>
                    <p className="text-white/90 text-sm">{destination.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Deals Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-nato-blue/10 text-nato-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              EXCLUSIVE DEALS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Amazing Travel Deals & More
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flightDeals.map((deal, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{deal.route}</div>
                    <div className="text-sm text-gray-600">{deal.dates}</div>
                  </div>
                  <img src={deal.logo} alt={deal.airline} className="w-10 h-10 rounded" />
                </div>

                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">{deal.airline}</div>
                  <div className="text-sm text-gray-600">{deal.travelers}</div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-nato-blue">${deal.price}</div>
                  <button className="bg-nato-gold hover:bg-nato-gold-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
