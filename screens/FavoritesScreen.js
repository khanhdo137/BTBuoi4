// /screens/FavoritesScreen.js
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useFavorites } from '../contexts/FavoritesContext';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const FavoritesScreen = () => {
  const { favoriteMeals } = useFavorites();  // Đảm bảo rằng useFavorites() không trả về undefined

  const favoriteMealsList = MEALS.filter((meal) => favoriteMeals.includes(meal.id));

  if (favoriteMealsList.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>No favorite meals found!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMealsList}
      renderItem={({ item }) => <MealItem meal={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
