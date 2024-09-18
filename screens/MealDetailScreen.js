import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFavorites } from '../contexts/FavoritesContext';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = () => {
  const route = useRoute();
  const { mealId } = route.params;

  // Log mealId để kiểm tra giá trị
  console.log('Received mealId:', mealId);

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const meal = MEALS.find((meal) => meal.id === mealId);

  // Log meal để kiểm tra xem có món ăn được tìm thấy không
  console.log('Found meal:', meal);

  if (!meal) {
    return (
      <View style={styles.screen}>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  const handleFavoriteToggle = () => {
    if (isFavorite(mealId)) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };

  return (
    <View style={styles.screen}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.name}</Text>
      <Text style={styles.description}>{meal.description}</Text>
      <Button
        title={isFavorite(mealId) ? 'Remove from Favorites' : 'Add to Favorites'}
        onPress={handleFavoriteToggle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default MealDetailScreen;
