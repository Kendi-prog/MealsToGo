import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = "some name", 
        icon,
        photos = [
            "https://unsplash.com/photos/cooked-food-awj7sRviVXo"
        ],
        address = "some random street",
        ratings = 4,
        isOpen = true,
        isClosedTemporarily
    } = restaurant;
    return (
        <Text>Info</Text>
    );
}