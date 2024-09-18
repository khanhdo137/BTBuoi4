// /contexts/FavoritesContext.js
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const addFavorite = (mealId) => {
    setFavoriteMeals((currentFavorites) => [...currentFavorites, mealId]);
  };

  const removeFavorite = (mealId) => {
    setFavoriteMeals((currentFavorites) =>
      currentFavorites.filter((id) => id !== mealId)
    );
  };

  const isFavorite = (mealId) => favoriteMeals.includes(mealId);

  return (
    <FavoritesContext.Provider
      value={{ favoriteMeals, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
