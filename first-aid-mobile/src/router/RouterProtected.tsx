import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Temp} from './temp';

const Stack = createNativeStackNavigator();

export const RouterProtected = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="temp" component={Temp} />
    </Stack.Navigator>
  );
};
