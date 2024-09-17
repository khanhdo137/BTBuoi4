// /screens/CategoriesScreen.js
import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';

const CategoryGridTile = ({ title, image, onSelect }) => (
  <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default function CategoriesScreen() {
  const navigation = useNavigation();

  const renderGridItem = (itemData) => (
    <CategoryGridTile
      title={itemData.item.title}
      image={itemData.item.image}
      onSelect={() => {
        navigation.navigate('CategoryMeals', { categoryId: itemData.item.id });
      }}
    />
  );

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
