import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = () => {
  const route = useRoute();
  const { mealId } = route.params;
  
  const meal = MEALS.find((meal) => meal.id === mealId);

  const handleOrderMeal = () => {
    Alert.alert('Đặt món thành công!', `Bạn đã đặt ${meal.name} với giá ${meal.price ? meal.price.toLocaleString() : 'không xác định'} VND.`);
  };

  if (!meal) {
    return (
      <View style={styles.screen}>
        <Text>Không tìm thấy món ăn!</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.name}</Text>
      <Text style={styles.description}>{meal.description}</Text>
      <Text style={styles.price}>Giá: {meal.price ? meal.price.toLocaleString() : 'không xác định'} VND</Text>
      <TouchableOpacity style={styles.button} onPress={handleOrderMeal}>
        <Text style={styles.buttonText}>Đặt món</Text>
      </TouchableOpacity>
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
  price: {
    fontSize: 18,
    color: 'green',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MealDetailScreen;
