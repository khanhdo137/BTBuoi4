import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MealItem = ({ meal }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.mealItem}
      onPress={() => {
        console.log('Navigating to MealDetail with mealId:', meal.id);
        navigation.navigate('MealDetail', { mealId: meal.id });
      }}
    >
      <Image source={{ uri: meal.imageUrl }} style={styles.mealImage} />
      <Text style={styles.mealName}>{meal.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  mealImage: {
    width: '100%',
    height: 200,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
  },
});

export default MealItem;
