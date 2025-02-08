import React from "react";
import { Searchbar } from 'react-native-paper';
import { FlatList } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { SafeArea, SearchContainer, RestaurantListContainer } from "./restaurant.screens.styles";

export const RestaurantsScreens = () =>  {
  return (
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <FlatList 
            data={[{name: 1}, {name:2}]}
            renderItem={() => <RestaurantInfoCard />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{padding: 16}}/>
      </SafeArea> 
  );
}

