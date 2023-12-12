// index.js
import React from 'react';
import { CONFIG } from '../components/config';
import LandingPage from './landing-page';
import Showcase from './showcase';

// Show landing page if showLandingPage is true in config.js
const IndexPage = () => {
  if (CONFIG.showLandingPage) {
    return <LandingPage />;
  }
  return <Showcase />;
};

export default IndexPage;