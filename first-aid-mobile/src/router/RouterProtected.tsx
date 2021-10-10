import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LoginScreen} from '@screens';

const Drawer = createDrawerNavigator();

export const RouterProtected = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={LoginScreen} />
    </Drawer.Navigator>
  );
};
