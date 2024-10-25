import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import AsteroidApp from './src/AsteroidApp';

export default function App() {
  return (
    <Provider store={store}>
      <AsteroidApp />
    </Provider>
  );
}
