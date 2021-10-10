import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStartedScreen, LoginScreen} from '@screens';

const Stack = createNativeStackNavigator();

export const RouterUnprotected = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
