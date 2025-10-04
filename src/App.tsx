import Hero from './components/Hero';
import Navigation from './components/Navigation';
import TrustBar from './components/TrustBar';
import FeaturedDeals from './components/FeaturedDeals';
import WhyChooseUs from './components/WhyChooseUs';
import MemberCountries from './components/MemberCountries';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Introduction from './components/Introduction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustBar />
      <FeaturedDeals />
      <WhyChooseUs />
      <Blog />
      <Introduction />
      <MemberCountries />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
