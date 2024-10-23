import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import AsyncStorage from 'react-native';
import * as ScreenOrientation from 'react-native';

const App = () => {
  const [readingPosition, setReadingPosition] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const bookText = "Бұл жерде кітаптың мәтіні. ... (бұдан әрі қарай мәтін)";

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

  const handleSearch = () => {
    const index = bookText.indexOf(searchQuery);
    if (index !== -1) {
      setReadingPosition(index);
    } else {
      Alert.alert("Нәтиже табылмады", "Іздеу сұранысы табылмады.");
    }
  };

  const handleRotateScreen = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    if (orientation === ScreenOrientation.OrientationLock.DEFAULT) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    }
  };

  const sendMessageToCreator = () => {
    Alert.alert("Хат жіберу", "Сіз хат жіберу функциясын пайдаланасыз.");
    // Мұнда хат жіберу логикасын қосуды қарастырыңыз
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.bookContainer}>
        <Text style={styles.bookText}>{bookText.slice(readingPosition)}</Text>
      </ScrollView>
      <View style={styles.controls}>
        <TextInput
          style={styles.input}
          placeholder="Іздеу..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Іздеу" onPress={handleSearch} />
        <Button title="Экранды аудару" onPress={handleRotateScreen} />
        <Button title="Жасаушыға хат жіберу" onPress={sendMessageToCreator} />
        <Button title="Келесі бет" onPress={() => {
          setReadingPosition(prev => prev + 1);
          savePosition();
        }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bookContainer: {
    flex: 1,
  },
  bookText: {
    fontSize: 18,
    lineHeight: 24,
  },
  controls: {
    marginTop: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
});

export default App;
