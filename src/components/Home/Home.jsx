import React from 'react';
import Banner from '../Banner/Banner';
import ServicesSection from '../HomeSection/ServicesSection';
import RoyalPricing from '../HomeSection/RoyalPricing';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <ServicesSection></ServicesSection>
         <RoyalPricing></RoyalPricing>
        </div>
    );
};

export default Home;