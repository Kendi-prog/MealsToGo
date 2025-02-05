import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import {  
  useFonts as useOswald, 
  Oswald_400Regular } from '@expo-google-fonts/oswald';
import {  
  useFonts as useLato, 
  Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { RestaurantsScreens } from './src/features/restaraunts/screens/restaurant.screen';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreens />
      </ThemeProvider>
      
      <ExpoStatusBar style='auto'/>

    </>
    
  );
}

