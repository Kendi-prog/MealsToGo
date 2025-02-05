import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
        <Card elevation={5} style = {styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Text style={styles.title}>{name}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
    },
    cover: {
        padding: 8,
        backgroundColor: "white",
    },
    title: {
        padding: 10
    }

})