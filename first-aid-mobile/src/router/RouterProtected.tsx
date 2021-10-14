import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DashboardScreen} from '@screens';

const Drawer = createDrawerNavigator();

export const RouterProtected = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={DashboardScreen} />
    </Drawer.Navigator>
  );
};
