import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Temp} from './temp';
import {Some1} from './some1';

const Drawer = createDrawerNavigator();

export const RouterProtected = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Temp} />
      <Drawer.Screen name="Notifications" component={Some1} />
    </Drawer.Navigator>
  );
};
