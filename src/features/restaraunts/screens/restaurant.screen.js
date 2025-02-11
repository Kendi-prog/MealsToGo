import React, { useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { SearchContainer, RestaurantListContainer, Loading, LoadingContainer } from "./restaurant.screens.styles";
import { Spacer } from "../../../components/spacer/spacer";
import { SafeArea } from "../../../components/utility/safe-area";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";


export const RestaurantsScreens = () =>  {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  return (
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={Colors.blue300} />
          </LoadingContainer>
        )}
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantListContainer 
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard  restaurant={item}/>
                </Spacer>)}}
            keyExtractor={(item) => item.name}
        />
      </SafeArea> 
  );
}

