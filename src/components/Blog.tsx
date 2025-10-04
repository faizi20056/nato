import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Honoring Service: Visiting Angkor Wat, Cambodia During Food and Drink',
      excerpt: 'In the stillness of dawn, when the world is neither night nor day, there exists…',
      image: 'https://blog.militaryfares.com/wp-content/uploads/2025/09/generated_image_20250908_204916.png',
    },
    {
      title: 'The Ultimate Military Family Vacation Guide to Madrid, Spain',
      excerpt: 'Picture this: You\'re stepping off a plane into a city where flamenco dancers twirl faster…',
      image: 'https://blog.militaryfares.com/wp-content/uploads/2025/08/generated_image_20250805_225501.png',
    },
    {
      title: 'A Guide to Helsinki, Finland for Military Families',
      excerpt: 'As you find yourself navigating through a turbulent world of deployment orders and the swirling…',
      image: 'https://blog.militaryfares.com/wp-content/uploads/2025/08/generated_image_20250805_224306.png',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-nato-blue/10 text-nato-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
            TRAVEL INSIGHTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-nato-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <button className="inline-flex items-center space-x-2 text-nato-blue font-semibold hover:text-nato-blue-dark transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
