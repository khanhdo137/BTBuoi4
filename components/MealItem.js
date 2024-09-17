// /components/MealItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = ({ imageUrl, title, onSelect }) => (
  <TouchableOpacity style={styles.mealItem} onPress={onSelect}>
    <Image source={{ uri: imageUrl }} style={styles.mealImage} />
    <Text style={styles.mealTitle}>{title}</Text>
  </TouchableOpacity>
);

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
    resizeMode: 'cover',
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
  },
});

export default MealItem;
