import styled from "styled-components";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${ StatusBar.currentHeight};
`;

export const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantListContainer = styled(FlatList).attrs({
    contentContainerStyle : {
        padding: 16,
    }
})
 