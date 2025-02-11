import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/text";
import { 
    RestaurantCard, 
    RestaurantCardCover, 
    Info, 
    Address,
    Rating,
    Section,
    SectionEnd,
    Icon,
    
} from "./restaurant-info-card.styles";



export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "some name", 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" 
        ],
        address = "some random street",
        ratings = 4,
        isOpen = true,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(ratings)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map(() => 
                            <SvgXml xml={star} width={15} height={20} />
                        )}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="medium">
                            {isOpen &&  <SvgXml xml={open} width={15} height={20} />}  
                        </Spacer>
                        <Spacer position="left" size="large">
                          <Icon source={{ uri: icon }} />  
                        </Spacer>
                        
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>    
        </RestaurantCard>
    );
}

