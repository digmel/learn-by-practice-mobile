import React, {FC} from 'react';
import {View, Image} from 'react-native';
import {TCardProps} from './Card.type';
import {styles} from './Card.style';
import {color, Text} from '@components';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Card: FC<TCardProps> = ({onPress, title, svg}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress && onPress()}>
      <View style={styles.svgContainer}>{svg}</View>

      <View style={styles.titleContainer}>
        <Text variation="title">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
