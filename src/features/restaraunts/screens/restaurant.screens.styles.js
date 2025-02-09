import styled from "styled-components";
import { View, FlatList } from "react-native";

export const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantListContainer = styled(FlatList).attrs({
    contentContainerStyle : {
        padding: 16,
    }
})
 