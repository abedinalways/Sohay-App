import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FeaturesCard from '../../Components/FeaturesCard/FeaturesCard';
import Services from '../../Components/Services/Services';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturesCard />
      <Services/>
    </div>
  );
};

export default Home;