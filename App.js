import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/store'; 
import AsteroidApp from './src/AsteroidApp';
import AsteroidDetail from './src/components/AsteroidDetail';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AsteroidApp">
        <Stack.Screen name="AsteroidApp" component={AsteroidApp} />
        <Stack.Screen name="AsteroidDetail" component={AsteroidDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;

