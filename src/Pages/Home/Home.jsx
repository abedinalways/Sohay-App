import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FeaturesCard from '../../Components/FeaturesCard/FeaturesCard';
import Services from '../../Components/Services/Services';
import SohayBusiness from '../../Components/SohayBusiness/SohayBusiness';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturesCard />
      <Services />
      <SohayBusiness/>
    </div>
  );
};

export default Home;