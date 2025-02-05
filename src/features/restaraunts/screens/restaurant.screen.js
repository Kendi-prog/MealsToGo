import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { SafeArea, SearchContainer, RestaurantListContainer } from "./restaurant.screens.styles";

export const RestaurantsScreens = () =>  {
  return (
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer> 
      </SafeArea> 
  );
}

