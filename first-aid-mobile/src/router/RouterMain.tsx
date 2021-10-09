import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TRouterMain} from './RouterMain.type';

export const RouterMain: FC<TRouterMain> = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello First Aid</Text>
    </View>
  );
};
