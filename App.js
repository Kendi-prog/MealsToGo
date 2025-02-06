import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/infrastructure/theme';
import { RestaurantsScreens } from './src/features/restaraunts/screens/restaurant.screen';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreens />
      </ThemeProvider>
      
      <ExpoStatusBar style='auto'/>

    </>
    
  );
}

