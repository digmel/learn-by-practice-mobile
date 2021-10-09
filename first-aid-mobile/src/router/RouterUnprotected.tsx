import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Some} from './some';
import {Some1} from './some1';

const Stack = createNativeStackNavigator();

export const RouterUnprotected = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Some} />
      <Stack.Screen name="Some1" component={Some1} />
    </Stack.Navigator>
  );
};
