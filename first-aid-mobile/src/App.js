import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './router';
import {AppStateProvider} from 'AppState';

const App = () => {
  return (
    <AppStateProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AppStateProvider>
  );
};

export default App;
