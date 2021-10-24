import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './Answer.style';
import {TAnswerProps} from './Answer.type';
import {color, size, Text} from '@components';

export const Answer: FC<TAnswerProps> = ({
  answer,
  variation = 'regular',
  onPress,
}) => {
  let dynamicColor;

  switch (variation) {
    case 'regular':
      dynamicColor = color.primary;
      break;
    case 'wrong':
      dynamicColor = color.error;
      break;
    case 'correct':
      dynamicColor = color.success;
      break;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress && onPress()}>
      <View style={styles.content}>
        <Text variation="caption" fontWeight="light" color={dynamicColor}>
          {answer}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
