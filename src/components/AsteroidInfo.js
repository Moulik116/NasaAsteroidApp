import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const AsteroidInfo = () => {
  const { info, loading, error } = useSelector((state) => state.asteroid);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  if (!info) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {info.name}</Text>
      <Text style={styles.url}>NASA JPL URL: {info.nasa_jpl_url}</Text>
      <Text style={styles.hazard}>
        Potentially Hazardous: {info.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  url: {
    fontSize: 16,
    color: 'blue',
  },
  hazard: {
    fontSize: 16,
    color: 'red',
  },
});

export default AsteroidInfo;
