import React, { useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useRoute, useNavigation } from '@react-navigation/native';

const CategoryMealsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoryId } = route.params;

  // Lọc các món ăn theo categoryId
  const displayedMeals = MEALS.filter(meal => meal.categoryId === categoryId);

  useEffect(() => {
    // Cập nhật tiêu đề của màn hình dựa trên categoryId
    const categoryTitle = CATEGORIES.find(category => category.id === categoryId)?.title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const renderMealItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.mealItem} 
      onPress={() => navigation.navigate('MealDetail', { mealId: item.id })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.mealImage} />
      <Text style={styles.mealName}>{item.name}</Text>
      <Text style={styles.price}>
        Giá: {item.price ? `${item.price.toLocaleString()} VND` : 'Giá không xác định'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={displayedMeals}
      renderItem={renderMealItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  mealItem: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  mealImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
  },
  price: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    paddingBottom: 8,
  },
});

export default CategoryMealsScreen;
