import styled from "styled-components";
import { View, SafeAreaView, StatusBar } from "react-native";

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${ StatusBar.currentHeight};
`;

export const SearchContainer = styled(View)`
    padding: 16px;
`;

export const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: 16px;
    background-color: blue;
`;