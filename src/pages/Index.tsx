
import React from 'react';
import Layout from '../components/layout/Layout';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutSection from '../components/home/AboutSection';
import Testimonials from '../components/home/Testimonials';

const Index: React.FC = () => {
  return (
    <Layout>
      <HeroBanner />
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
    </Layout>
  );
};

export default Index;
