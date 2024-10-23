import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Электронды Кітап</Text>
    <Button title="Кітапты Оқыңыз" onPress={() => navigation.navigate('Book')} />
    <Button title="Реклама" onPress={() => navigation.navigate('Advertisement')} />
  </View>
);

const BookScreen = () => {
  const [readingPosition, setReadingPosition] = useState(0);
  const text = "Бұл жерде кітаптың мәтіні. ... (бұдан әрі қарай мәтін)";

  useEffect(() => {
    const getPosition = async () => {
      const position = await AsyncStorage.getItem('readingPosition');
      if (position) setReadingPosition(Number(position));
    };
    getPosition();
  }, []);

  const savePosition = async () => {
    await AsyncStorage.setItem('readingPosition', readingPosition.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bookText}>{text.slice(readingPosition)}</Text>
      <Button title="Келесі бет" onPress={() => {
        setReadingPosition(prev => prev + 1);
        savePosition();
      }} />
    </View>
  );
};

const AdvertisementScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Реклама</Text>
    <Text>Бұл жерде жарнама орналасады.</Text>
  </View>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Advertisement" component={AdvertisementScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bookText: {
    margin: 20,
    fontSize: 18,
  },
});

export default App;
