import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './List.style';
import {TListProps} from './List.type';
import {color, size, Icon, Text} from '@components';

export const List: FC<TListProps> = ({text}) => {
  return (
    <View style={[styles.container]}>
      <Icon
        name="bullet"
        size={size.xs}
        color={color.primary}
        iconContainerStyle={{paddingRight: size.xs}}
      />
      <Text>{text}</Text>
    </View>
  );
};
