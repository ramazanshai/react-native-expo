import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    let res = 0;

    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num1 / num2;
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Complex Calculator</Text>
      
      <View style={styles.row}>
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
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Operation:</Text>
        <Picker
          selectedValue={operation}
          style={styles.picker}
          onValueChange={(itemValue) => setOperation(itemValue)}
        >
          <Picker.Item label="Add (+)" value="+" />
          <Picker.Item label="Subtract (-)" value="-" />
          <Picker.Item label="Multiply (*)" value="*" />
          <Picker.Item label="Divide (/)" value="/" />
        </Picker>
      </View>

      <Button title="Calculate" onPress={calculateResult} />
      
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
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '45%',
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  picker: {
    height: 40,
    width: '45%',
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
});
