import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import { 
    RestaurantCard, 
    RestaurantCardCover, 
    Title, 
    Info, 
    Address,
    Rating 
} from "./restaurant-info-card.styles";

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

    const ratingArray = Array.from(new Array(Math.floor(ratings)));
    console.log(ratingArray);

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Rating>
                    {ratingArray.map(() => 
                        <SvgXml xml={star} width={20} height={20} />
                    )}
                </Rating>
               
                <Address>{address}</Address>
            </Info>    
        </RestaurantCard>
    );
}

