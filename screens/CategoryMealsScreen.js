// /screens/CategoryMealsScreen.js
import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useRoute, useNavigation } from '@react-navigation/native';

const CategoryMealsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(meal => meal.categoryId === categoryId);

  React.useEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === categoryId)?.title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const renderMealItem = ({ item }) => (
    <View style={styles.mealItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.mealImage} />
      <Text style={styles.mealName}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={displayedMeals}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
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
    resizeMode: 'cover',
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
  },
});

export default CategoryMealsScreen;
