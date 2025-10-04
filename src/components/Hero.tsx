import { Search, Calendar, Users, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-nato-blue via-nato-blue-dark to-nato-navy text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* VOB Badge */}
         <div className="inline-flex items-center">
          <img
            src="https://www.militaryfares.com/assets/militaryfares/images/vob_bage.webp"
            alt="VOB"
            className="h-16" // increased size from h-8 to h-16
          />
        </div>


          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Military Discount Flights
            <span className="block text-nato-gold mt-2">For All NATO Members</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-nato-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Exclusive travel discounts for active-duty military, veterans, and families across all 32 NATO member countries. Trusted since 2002.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <button className="px-6 py-2 bg-nato-blue text-white rounded-lg font-semibold">Flights</button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Hotels</button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Packages</button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Car Rental</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* From */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Departure city"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nato-blue focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              {/* To */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nato-blue focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Dates</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Select dates"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nato-blue focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nato-blue focus:border-transparent appearance-none text-gray-900">
                    <option>1 Traveler</option>
                    <option>2 Travelers</option>
                    <option>3 Travelers</option>
                    <option>4+ Travelers</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full bg-nato-gold hover:bg-nato-gold-dark text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-lg">
              <Search size={24} />
              <span>Search Exclusive Deals</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-nato-gold mb-1">32</div>
              <div className="text-sm text-nato-light">NATO Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-nato-gold mb-1">500K+</div>
              <div className="text-sm text-nato-light">Military Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-nato-gold mb-1">20+</div>
              <div className="text-sm text-nato-light">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-nato-gold mb-1">40%</div>
              <div className="text-sm text-nato-light">Avg. Savings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
          <path fill="#ffffff" d="M0,32L48,37.3C96,43,192,53,288,56C384,59,480,53,576,48C672,43,768,37,864,37.3C960,37,1056,43,1152,45.3C1248,48,1344,48,1392,48L1440,48L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path>
        </svg>
      </div>
    </div>
  );
}
