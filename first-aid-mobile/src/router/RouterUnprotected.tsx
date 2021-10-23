import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GetStartedScreen,
  AuthorizationScreen,
  LoginScreen,
  SignUpScreen,
  ResetPasswordScreen,
} from '@screens';

const Stack = createNativeStackNavigator();

export const RouterUnprotected = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <Stack.Screen
        name="AuthorizationScreen"
        component={AuthorizationScreen}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};
