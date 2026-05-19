import React from 'react';
import Hero from '../components/home/Hero';
import HeroCategories from '../components/home/HeroCategories';
import Marquee from '../components/home/Marquee';
import Categories from '../components/home/Categories';
import Products from '../components/home/Products';
import OurStory from '../components/home/OurStory';
import FullVeadyaEdit from '../components/home/FullVeadyaEdit';
import CommunitySection from '../components/home/CommunitySection';
import WatchShop from '../components/home/WatchShop';

function Home() {
  return (
    <>
      <Hero />
      <HeroCategories />
      <Marquee />
      <Products />
      <OurStory />
      <Categories />
      <FullVeadyaEdit />
      <CommunitySection />
      <WatchShop />
    </>
  );
}

export default Home;
