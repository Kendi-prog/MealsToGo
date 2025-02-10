import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import Ionicons from '@expo/vector-icons/Ionicons';
import {  
  useFonts as useOswald, 
  Oswald_400Regular } from '@expo-google-fonts/oswald';
import {  
  useFonts as useLato, 
  Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { RestaurantsScreens } from './src/features/restaraunts/screens/restaurant.screen';
import { SafeArea } from './src/components/utility/safe-area';
import { RestaurantContextProvider } from './src/services/restaurant/restaurant.context';




const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings"
}

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);



const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name]
  return {
    tabBarIcon: ({size, color}) => 
      <Ionicons name={iconName} size={size} color={color} />
  }
}

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
        <RestaurantContextProvider>
          <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
                }}
            >
                <Tab.Screen name="Restaurants" component={RestaurantsScreens} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </ThemeProvider>
      
      <ExpoStatusBar style='auto'/>

    </>
    
  );
}

