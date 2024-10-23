import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SecondScreen({ route, navigation }) {
  const { isChecked, radioValue, dropdownValue } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Screen</Text>

      <Text>Checkbox Value: {isChecked ? 'Checked' : 'Unchecked'}</Text>
      <Text>Selected Radio Option: {radioValue}</Text>
      <Text>Selected Dropdown Value: {dropdownValue}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
