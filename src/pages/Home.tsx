import React from 'react';
import Hero from '../components/Hero/Hero';
import AppContainer from '../components/HomeAppContainer/AppContainer';
import ExpertsContainer from '../components/HomeExpertsContainer/ExpertsContainer';
import Features from '../components/HomeFeaturesContainer/Features';

const Home = () => (
  <div>
    <Hero />
    <AppContainer />
    <ExpertsContainer />
    <Features />
  </div>
);

export default Home;
