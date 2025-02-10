import React, { useState, createContext, useEffect, useMemo } from "react";

import { restarauntsRequest, restarauntsTransform } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    return (
        <RestaurantContext.Provider 
            value={{
                restaurant: [1, 2, 3],
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
}