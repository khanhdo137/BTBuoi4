// /data/dummy-data.js
export const CATEGORIES = [
  { id: '1', title: 'Italian', image: require('../assets/images/category1.png') },
  { id: '2', title: 'Quick & Easy', image: require('../assets/images/category2.png') },
  // Thêm các danh mục khác
];

export const MEALS = [
  { id: '1', categoryId: '1', name: 'Spaghetti', imageUrl: 'https://example.com/spaghetti.jpg', description: 'Delicious spaghetti with tomato sauce.' },
  { id: '2', categoryId: '1', name: 'Lasagna', imageUrl: 'https://example.com/lasagna.jpg', description: 'Layered pasta with meat and cheese.' },
  { id: '3', categoryId: '2', name: 'Tacos', imageUrl: 'https://example.com/tacos.jpg', description: 'Tasty tacos with beef and vegetables.' },
  // Thêm các món ăn khác
];
