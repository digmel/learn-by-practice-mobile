import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TCardProps} from './Card.type';
import {styles} from './Card.style';

export const Card: FC<TCardProps> = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};
