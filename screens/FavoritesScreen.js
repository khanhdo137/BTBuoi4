// /screens/FavoritesScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

const DUMMY_FAVORITES = [
  // Thay thế bằng dữ liệu thật hoặc sử dụng trạng thái local
  { id: '1', name: 'Spaghetti', imageUrl: 'https://example.com/spaghetti.jpg' },
  { id: '2', name: 'Lasagna', imageUrl: 'https://example.com/lasagna.jpg' },
];

const FavoritesScreen = ({ navigation }) => {
  const renderMealItem = ({ item }) => (
    <MealItem
      imageUrl={item.imageUrl}
      title={item.name}
      onSelect={() => {
        navigation.navigate('MealDetail', { mealId: item.id });
      }}
    />
  );

  return (
    <View style={styles.container}>
      {DUMMY_FAVORITES.length === 0 ? (
        <Text>No favorite meals found!</Text>
      ) : (
        <FlatList
          data={DUMMY_FAVORITES}
          renderItem={renderMealItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
