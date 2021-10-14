import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TCardProps} from './Card.type';
import {styles} from './Card.style';

export const Card: FC<TCardProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
