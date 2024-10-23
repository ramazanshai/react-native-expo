import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const calculateSum = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Two Number Sum Calculator</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter first number"
        value={number1}
        onChangeText={setNumber1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter second number"
        value={number2}
        onChangeText={setNumber2}
      />
      <Button title="Calculate" onPress={calculateSum} />
      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: '80%',
  },
  result: {
    fontSize: 20,
    marginTop: 10,
  },
});
