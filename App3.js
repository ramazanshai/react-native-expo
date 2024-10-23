import React, { useState } from 'react';
import { View, Text, Button, CheckBox, Picker, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Stack Navigator құру
const Stack = createStackNavigator();

// Бірінші экран
function FirstScreen({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('Option 1');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First Screen</Text>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
        <Text>Checkbox</Text>
      </View>

      {/* Dropdown */}
      <Text>Dropdown List</Text>
      <Picker selectedValue={dropdownValue} onValueChange={(itemValue) => setDropdownValue(itemValue)}>
        <Picker.Item label="Option 1" value="Option 1" />
        <Picker.Item label="Option 2" value="Option 2" />
      </Picker>

      <Button
        title="Go to Second Screen"
        onPress={() =>
          navigation.navigate('SecondScreen', { isChecked, dropdownValue })
        }
      />
    </View>
  );
}

// Екінші экран
function SecondScreen({ route, navigation }) {
  const { isChecked, dropdownValue } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Screen</Text>

      <Text>Checkbox Value: {isChecked ? 'Checked' : 'Unchecked'}</Text>
      <Text>Selected Dropdown Value: {dropdownValue}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
