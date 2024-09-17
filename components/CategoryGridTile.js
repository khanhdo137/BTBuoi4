// /components/CategoryGridTile.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryGridTile = ({ title, image, onSelect }) => (
  <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

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

export default CategoryGridTile;
