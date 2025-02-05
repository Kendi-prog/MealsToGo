import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { RestaurantsScreens } from './src/features/restaraunts/screens/restaurant.screen';

export default function App() {
  return (
    <>
      <RestaurantsScreens />
      <ExpoStatusBar style='auto'/>

    </>
    
  );
}

