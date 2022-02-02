import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DashboardScreen,
  ExamScreen,
  IntroductionScreen,
  Topic01Screen,
  Topic02Screen,
  Topic03Screen,
  Topic04Screen,
  Topic05Screen,
  Topic06Screen,
  Topic07Screen,
  Topic08Screen,
  Topic09Screen,
  Topic10Screen,
} from '@screens';
import {color} from '@components';

const Drawer = createDrawerNavigator();

export const Router = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        swipeEnabled: false,
        drawerActiveBackgroundColor: color.light,
      }}>
      <Drawer.Screen name="IntroductionScreen" component={IntroductionScreen} />
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="ExamScreen" component={ExamScreen} />

      <Drawer.Screen name="Topic01Screen" component={Topic01Screen} />
      <Drawer.Screen name="Topic02Screen" component={Topic02Screen} />
      <Drawer.Screen name="Topic03Screen" component={Topic03Screen} />
      <Drawer.Screen name="Topic04Screen" component={Topic04Screen} />
      <Drawer.Screen name="Topic05Screen" component={Topic05Screen} />
      <Drawer.Screen name="Topic06Screen" component={Topic06Screen} />
      <Drawer.Screen name="Topic07Screen" component={Topic07Screen} />
      <Drawer.Screen name="Topic08Screen" component={Topic08Screen} />
      <Drawer.Screen name="Topic09Screen" component={Topic09Screen} />
      <Drawer.Screen name="Topic10Screen" component={Topic10Screen} />
    </Drawer.Navigator>
  );
};
