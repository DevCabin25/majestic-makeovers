import React from 'react';
import Banner from '../Banner/Banner';
import ServicesSection from '../HomeSection/ServicesSection';
import RoyalPricing from '../HomeSection/RoyalPricing';
import RoyalTreatment from '../HomeSection/RoyalTreatment';
import RoyalReviews from '../HomeSection/RoyalReviews';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <ServicesSection></ServicesSection>
         <RoyalPricing></RoyalPricing>
         <RoyalTreatment></RoyalTreatment>
         <RoyalReviews></RoyalReviews>
        </div>
    );
};

export default Home;