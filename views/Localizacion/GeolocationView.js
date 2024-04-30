import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const GeoLocationView = () => {
  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const handleUpdateLocation = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    mapRef.current.animateToRegion({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          ref={mapRef}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Mi ubicación"
            description="Aquí estoy"
          />
        </MapView>
      ) : (
        <Text>Cargando...</Text>
      )}
      <Button
        title="Actualizar ubicación"
        onPress={handleUpdateLocation}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '80%',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default GeoLocationView;
