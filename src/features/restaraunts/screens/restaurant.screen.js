import React, { useContext } from "react";
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { SearchContainer, RestaurantListContainer } from "./restaurant.screens.styles";
import { Spacer } from "../../../components/spacer/spacer";
import { SafeArea } from "../../../components/utility/safe-area";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { use } from "react";

export const RestaurantsScreens = () =>  {
  const restaurantContext = useContext(RestaurantContext);
  return (
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantListContainer 
            data={restaurantContext.restaurants}
            renderItem={() => (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard />
              </Spacer>)}
            keyExtractor={(item) => item.name}
        />
      </SafeArea> 
  );
}

