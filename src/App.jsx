import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Discover from './components/Discover';
import CoffeeMenu from './components/CoffeeMenu';
import WhyDifferent from './components/WhyDifferent';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-coffee-dark hidden-x">
      <Navbar />
      <Hero />
      <Discover />
      <CoffeeMenu />
      <WhyDifferent />
      <CTA />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
