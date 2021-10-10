import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GetStartedScreen,
  LoginScreen,
  SignUpScreen,
  ResetPasswordScreen,
} from '@screens';

const Stack = createNativeStackNavigator();

export const RouterUnprotected = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};
