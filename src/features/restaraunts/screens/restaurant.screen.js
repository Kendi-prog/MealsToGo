import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-info-card";

export const RestaurantsScreens = () =>  {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <RestaurantInfoCard />
        </View> 
      </SafeAreaView>
      <ExpoStatusBar style='auto'/>

    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    borderRadius: 0
  
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  }

});