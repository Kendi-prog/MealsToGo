import React from "react";
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { SearchContainer, RestaurantListContainer } from "./restaurant.screens.styles";
import { Spacer } from "../../../components/spacer/spacer";
import { SafeArea } from "../../../components/utility/safe-area";

export const RestaurantsScreens = () =>  {
  return (
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantListContainer 
            data={[{name: 1}, {name:2}]}
            renderItem={() => (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard />
              </Spacer>)}
            keyExtractor={(item) => item.name}
        />
      </SafeArea> 
  );
}

