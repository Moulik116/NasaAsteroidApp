import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  fetchAsteroidStart,
  fetchAsteroidSuccess,
  fetchAsteroidFailure,
} from './slices/asteroidSlice';
import Axios from 'axios';
import AsteroidInfo from './components/AsteroidInfo';

const AsteroidApp = () => {
  const [asteroidId, setAsteroidId] = useState('');
  const dispatch = useDispatch();

  const handleFetchAsteroid = async () => {
    dispatch(fetchAsteroidStart());
    try {
      const response = await Axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=ENTER_YOUR_API_KEY`
      );
      dispatch(fetchAsteroidSuccess(response.data));
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
      <Button
        title="Submit"
        onPress={handleFetchAsteroid}
        disabled={!asteroidId}
      />
      <AsteroidInfo />
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