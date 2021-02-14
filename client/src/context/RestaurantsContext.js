import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restuarants, setRestaurants] = useState([]);

  return (
    <RestaurantsContext.Provider
      value={{
        restuarants,
        setRestaurants,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
