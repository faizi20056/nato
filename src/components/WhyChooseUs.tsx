export default function WhyChooseUs() {
  const features = [
    {
      icon: "https://www.militaryfares.com/assets/militaryfares/images/savings.png",
      title: "Cost Savings",
      description:
        "One of the primary advantages of using MilitaryFares.com is the significant cost savings it offers. Military members and veterans can access discounts that are not available to the general public, making travel more affordable.",
    },
    {
      icon: "https://www.militaryfares.com/assets/militaryfares/images/confidence.png",
      title: "Convenience",
      description:
        "The platform simplifies the booking process, allowing users to search for flights, compare prices, and make reservations with ease. This convenience is especially valuable for military members who may have unpredictable schedules.",
    },
    {
      icon: "https://www.militaryfares.com/assets/militaryfares/images/deals.png",
      title: "Exclusive Deals",
      description:
        "MilitaryFares.com negotiates exclusive deals with airlines, ensuring that its users have access to the best airfare rates. This includes discounts on both economy and business class flights.",
    },
    {
      icon: "https://www.militaryfares.com/assets/militaryfares/images/family_support.png",
      title: "Support Families",
      description:
        "MilitaryFares.com understands the importance of family connections for military personnel. It offers options for family members to accompany military travelers at discounted rates, fostering stronger bonds and connections.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-nato-blue/10 text-nato-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Benefits of MilitaryFares.com
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Icon / Image */}
              <div className="flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-16 w-16 object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-nato-blue to-nato-blue-dark rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Start Saving on Your Next Adventure?
              </h3>
              <p className="text-nato-light text-lg mb-6 lg:mb-0">
                Join thousands of NATO military members who trust us for their
                travel needs. Verify your military status and unlock exclusive
                discounts today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button className="bg-nato-gold hover:bg-nato-gold-dark text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg transition-all border border-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
