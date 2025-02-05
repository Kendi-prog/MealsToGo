import React from "react";


import { RestaurantCard, RestaurantCardCover, Title } from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "some name", 
        icon,
        photos = [
            "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" 
        ],
        address = "some random street",
        ratings = 4,
        isOpen = true,
        isClosedTemporarily
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
}

