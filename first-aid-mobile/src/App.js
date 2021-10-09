import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RouterMain} from './router';

const App = () => {
  return (
    <NavigationContainer>
      <RouterMain />
    </NavigationContainer>
  );
};

export default App;
