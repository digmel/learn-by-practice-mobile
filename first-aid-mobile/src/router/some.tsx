import React from 'react';
import {View, Text, Button} from 'react-native';
import {Some1} from './some1';

export const Some = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Landing</Text>
      <Button
        title="go to some1"
        onPress={() => {
          navigation.navigate(Some1);
        }}
      />
    </View>
  );
};
