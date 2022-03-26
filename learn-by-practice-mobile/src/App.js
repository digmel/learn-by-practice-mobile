import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './router';
import {AppStateProvider} from 'AppState';

const App = () => {
  const initialState = {
    correctAnswer: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {
          correctAnswer: state.correctAnswer + 1,
        };
      case 'clear':
        return {
          correctAnswer: 0,
        };

      default:
        return state;
    }
  };

  return (
    <AppStateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AppStateProvider>
  );
};

export default App;
