import camelize from "camelize";
import { mocks } from "./mock";

export const restarauntsRequest = (location ="37.7749295,-122.4194155" ) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];

        if(!mock) {
            reject("not found");
        }

        resolve(mock);
    });
};

 export const restarauntsTransform = (results = []) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });
    return camelize(mappedResults);
}

