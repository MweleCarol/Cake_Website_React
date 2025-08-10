import React, { useState } from 'react';
import Header from '../Components/Header';
import ExploreMenu from '../Components/ExploreMenu';
import FoodDisplay from '../Components/CakeDisplay';
import CakeCard from '../Components/CakeCard';
import { assets } from '../assets/assets';
import Contact from '../Components/Contact';

const Home = () => {
  const [category, setCategory] = useState("All");

 

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Contact />

     </div>
  );
};

export default Home;
