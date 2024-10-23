import React, { useState } from 'react';
import { View, Text, Button, CheckBox, TextInput, Picker, StyleSheet } from 'react-native';


export default function FirstScreen({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('Option 1');
  const [dropdownValue, setDropdownValue] = useState('Option 1');

  const handleNavigate = () => {
    navigation.navigate('SecondScreen', {
      isChecked,
      radioValue,
      dropdownValue,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First Screen</Text>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
        <Text>Checkbox</Text>
      </View>

      {/* Radio buttons */}
      <Text>Radio Button</Text>
      <View style={styles.radioContainer}>
        <Text onPress={() => setRadioValue('Option 1')}>Option 1</Text>
        <Text onPress={() => setRadioValue('Option 2')}>Option 2</Text>
      </View>

      {/* Dropdown */}
      <Text>Dropdown List</Text>
      <Picker selectedValue={dropdownValue} onValueChange={(itemValue) => setDropdownValue(itemValue)}>
        <Picker.Item label="Option 1" value="Option 1" />
        <Picker.Item label="Option 2" value="Option 2" />
      </Picker>

      <Button title="Go to Second Screen" onPress={handleNavigate} />
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
