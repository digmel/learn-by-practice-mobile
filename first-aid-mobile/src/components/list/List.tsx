import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './List.style';
import {TListProps} from './List.type';
import {color, size, Icon, Text} from '@components';

export const List: FC<TListProps> = ({children, variation}) => {
  let iconName: String;
  let dynamicColor;
  let dynamicSize;

  switch (variation) {
    case 'empty':
      iconName = 'check-clear';
      dynamicColor = color.primary;
      dynamicSize = size.m;
      break;
    case 'correct':
      iconName = 'check-correct';
      dynamicColor = color.success;
      dynamicSize = size.m;
      break;
    case 'wrong':
      iconName = 'check-wrong';
      dynamicColor = color.error;
      dynamicSize = size.m;
      break;

    default:
      iconName = 'bullet';
      dynamicColor = color.primary;
      dynamicSize = size.xs;
      break;
  }
  return (
    <View style={[styles.container]}>
      <Icon
        name={iconName}
        size={dynamicSize}
        color={dynamicColor}
        iconContainerStyle={{paddingRight: size.xs}}
      />
      <Text color={dynamicColor}>{children}</Text>
    </View>
  );
};
