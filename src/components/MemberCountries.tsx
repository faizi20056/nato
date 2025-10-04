export default function MemberCountries() {
  const countries = [
    { name: 'Albania', flag: '🇦🇱', code: 'AL' },
    { name: 'Belgium', flag: '🇧🇪', code: 'BE' },
    { name: 'Bulgaria', flag: '🇧🇬', code: 'BG' },
    { name: 'Canada', flag: '🇨🇦', code: 'CA' },
    { name: 'Croatia', flag: '🇭🇷', code: 'HR' },
    { name: 'Czech Republic', flag: '🇨🇿', code: 'CZ' },
    { name: 'Denmark', flag: '🇩🇰', code: 'DK' },
    { name: 'Estonia', flag: '🇪🇪', code: 'EE' },
    { name: 'Finland', flag: '🇫🇮', code: 'FI' },
    { name: 'France', flag: '🇫🇷', code: 'FR' },
    { name: 'Germany', flag: '🇩🇪', code: 'DE' },
    { name: 'Greece', flag: '🇬🇷', code: 'GR' },
    { name: 'Hungary', flag: '🇭🇺', code: 'HU' },
    { name: 'Iceland', flag: '🇮🇸', code: 'IS' },
    { name: 'Italy', flag: '🇮🇹', code: 'IT' },
    { name: 'Latvia', flag: '🇱🇻', code: 'LV' },
    { name: 'Lithuania', flag: '🇱🇹', code: 'LT' },
    { name: 'Luxembourg', flag: '🇱🇺', code: 'LU' },
    { name: 'Montenegro', flag: '🇲🇪', code: 'ME' },
    { name: 'Netherlands', flag: '🇳🇱', code: 'NL' },
    { name: 'North Macedonia', flag: '🇲🇰', code: 'MK' },
    { name: 'Norway', flag: '🇳🇴', code: 'NO' },
    { name: 'Poland', flag: '🇵🇱', code: 'PL' },
    { name: 'Portugal', flag: '🇵🇹', code: 'PT' },
    { name: 'Romania', flag: '🇷🇴', code: 'RO' },
    { name: 'Slovakia', flag: '🇸🇰', code: 'SK' },
    { name: 'Slovenia', flag: '🇸🇮', code: 'SI' },
    { name: 'Spain', flag: '🇪🇸', code: 'ES' },
    { name: 'Sweden', flag: '🇸🇪', code: 'SE' },
    { name: 'Turkey', flag: '🇹🇷', code: 'TR' },
    { name: 'United Kingdom', flag: '🇬🇧', code: 'GB' },
    { name: 'United States', flag: '🇺🇸', code: 'US' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-nato-blue/10 text-nato-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NATO ALLIANCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Serving All 32 NATO Member Countries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            United in service, united in savings. Exclusive travel benefits for military personnel and families across the entire NATO alliance
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-12">
          {countries.map((country) => (
            <div
              key={country.code}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200 hover:border-nato-blue hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </div>
                <div className="text-xs font-semibold text-gray-700 group-hover:text-nato-blue transition-colors">
                  {country.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-br from-nato-blue/5 to-nato-blue/10 rounded-2xl p-8 border border-nato-blue/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-nato-blue mb-2">32</div>
              <div className="text-gray-700 font-medium">Member Countries</div>
              <div className="text-sm text-gray-600 mt-1">Across Europe & North America</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nato-blue mb-2">3.5M+</div>
              <div className="text-gray-700 font-medium">Active Personnel</div>
              <div className="text-sm text-gray-600 mt-1">Eligible for exclusive discounts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nato-blue mb-2">5</div>
              <div className="text-gray-700 font-medium">Languages Supported</div>
              <div className="text-sm text-gray-600 mt-1">English, French, German, Spanish, Italian</div>
            </div>
          </div>
        </div>

        {/* NATO Heritage */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900">Building on 20+ years of excellence.</span> Since 2002, we've served hundreds of thousands of U.S. military members through MilitaryFares.com. Now, we're proud to extend these trusted travel benefits to the entire NATO alliance, honoring the service and sacrifice of military personnel and their families across all member nations.
          </p>
        </div>
      </div>
    </section>
  );
}
