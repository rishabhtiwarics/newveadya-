import React from 'react';
import Hero from '../components/home/Hero';
import HeroCategories from '../components/home/HeroCategories';
import Marquee from '../components/home/Marquee';
import Categories from '../components/home/Categories';
import Products from '../components/home/Products';
import OurStory from '../components/home/OurStory';
import FullVedaEdit from '../components/home/FullVedaEdit';
import CommunitySection from '../components/home/CommunitySection';

function Home() {
  return (
    <>
      <Hero />
      <HeroCategories />
      <Marquee />
      <Products />
      <OurStory />
      <Categories />
      <FullVedaEdit />
      <CommunitySection />
    </>
  );
}

export default Home;
