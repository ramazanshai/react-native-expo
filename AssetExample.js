import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image
        source={require('')} // Expo жобасы ішінде бұл сурет болуы керек
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
