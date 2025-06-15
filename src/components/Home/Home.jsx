import React from 'react';
import ServicesSection from '../HomeSection/ServicesSection';
import RoyalPricing from '../HomeSection/RoyalPricing';
import RoyalTreatment from '../HomeSection/RoyalTreatment';
import RoyalReviews from '../HomeSection/RoyalReviews';
import RoyalDiaries from '../HomeSection/RoyalDiaries';
import Banner from '../HomeSection/Banner';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <ServicesSection></ServicesSection>
         <RoyalPricing></RoyalPricing>
         <RoyalTreatment></RoyalTreatment>
         <RoyalReviews></RoyalReviews>
         <RoyalDiaries></RoyalDiaries>
        </div>
    );
};

export default Home;