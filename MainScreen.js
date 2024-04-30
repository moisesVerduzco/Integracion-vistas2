import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Camara" onPress={() => navigation.navigate('Camara')} />
      <Button title="Almacenamiento" onPress={() =>  navigation.navigate('Almacenamiento')} />
      <Button title="Comunicaciones" onPress={() =>  navigation.navigate('Mensajeria')} />
      <Button title="Geolocalizacion" onPress={() => navigation.navigate('GeolocationView')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MainScreen;
