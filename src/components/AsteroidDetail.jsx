import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const AsteroidDetail = () => {
  const { asteroidData, loading, error } = useSelector((state) => state.asteroid);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!asteroidData) {
    return <Text>No asteroid data available.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Asteroid Details</Text>
      <Text>Name: {asteroidData.name}</Text>
      <Text>
        NASA JPL URL: <Text style={styles.url}>{asteroidData.nasa_jpl_url}</Text>
      </Text>
      <Text>
        Is Potentially Hazardous Asteroid: {asteroidData.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  url: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AsteroidDetail;
