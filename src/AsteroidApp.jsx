import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  fetchAsteroidStart,
  fetchAsteroidSuccess,
  fetchAsteroidFailure,
} from './slices/asteroidSlice';
import Axios from 'axios';

const AsteroidApp = ({ navigation }) => {
  const [asteroidId, setAsteroidId] = useState('');
  const dispatch = useDispatch();

  const handleFetchAsteroid = async () => {
    dispatch(fetchAsteroidStart());
    try {
      const response = await Axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=YOUR_API_KEY`
      );
      dispatch(fetchAsteroidSuccess(response.data));
      navigation.navigate('AsteroidDetail');
    } catch (error) {
      dispatch(fetchAsteroidFailure(error.message));
    }
  };

  const handleFetchRandomAsteroid = async () => {
    dispatch(fetchAsteroidStart());
    try {
      const response = await Axios.get(
        'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY'
      );
      const asteroids = response.data.near_earth_objects;
      if (asteroids.length > 0) {
        const randomAsteroid = asteroids[Math.floor(Math.random() * asteroids.length)];
        const asteroidResponse = await Axios.get(
          `https://api.nasa.gov/neo/rest/v1/neo/${randomAsteroid.id}?api_key=YOUR_API_KEY`
        );
        dispatch(fetchAsteroidSuccess(asteroidResponse.data));
        navigation.navigate('AsteroidDetail');
      }
    } catch (error) {
      dispatch(fetchAsteroidFailure(error.message));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Asteroid ID"
        value={asteroidId}
        onChangeText={setAsteroidId}
      />
      <Button title="Submit" onPress={handleFetchAsteroid} disabled={!asteroidId} />
      <Button title="Random Asteroid" onPress={handleFetchRandomAsteroid} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AsteroidApp;
