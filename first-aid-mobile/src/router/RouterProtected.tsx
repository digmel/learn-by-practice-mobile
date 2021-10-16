import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DashboardScreen, ExamScreen, AllergicReactionScreen} from '@screens';
import {color} from '@components';

const Drawer = createDrawerNavigator();

export const RouterProtected = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        swipeEnabled: false,
        drawerActiveBackgroundColor: color.light,
      }}>
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="ExamScreen" component={ExamScreen} />
      <Drawer.Screen
        name="AllergicReactionScreen"
        component={AllergicReactionScreen}
      />
    </Drawer.Navigator>
  );
};
