import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Capt. James Mitchell',
      rank: 'U.S. Air Force',
      country: '🇺🇸',
      rating: 5,
      text: 'Outstanding service! Saved over $800 on our family vacation to Italy. The military verification process was simple and the discounts are legitimate.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Lt. Sophie Dubois',
      rank: 'French Army',
      country: '🇫🇷',
      rating: 5,
      text: 'Excellent platform for NATO military families. The multilingual support made booking so easy. Highly recommend for anyone in uniform!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Sgt. Max Weber',
      rank: 'German Air Force',
      country: '🇩🇪',
      rating: 5,
      text: 'Finally, a travel service that recognizes all NATO members! Great deals on flights across Europe. Customer service is professional and helpful.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Cpl. Elena Rossi',
      rank: 'Italian Navy',
      country: '🇮🇹',
      rating: 5,
      text: 'The best military travel discount program available. Saved significantly on hotels and car rentals. The website is easy to navigate in Italian too!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-nato-blue/10 text-nato-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-600">Reviews Verified by</span>
            <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg" alt="Trustpilot" className="h-6" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Customer Reviews from Sitejabber
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-nato-gold rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-white" size={20} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-nato-gold fill-nato-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-nato-blue"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 flex items-center space-x-2">
                    <span>{testimonial.name}</span>
                    <span>{testimonial.country}</span>
                  </div>
                  <div className="text-sm text-gray-600">{testimonial.rank}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
