// /screens/MealDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useRoute } from '@react-navigation/native';

const MealDetailScreen = () => {
  const route = useRoute();
  const { mealId } = route.params;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.name}</Text>
      <Text style={styles.details}>{selectedMeal?.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MealDetailScreen;
