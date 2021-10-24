import React, {FC} from 'react';
import {View, ViewStyle, TouchableOpacity} from 'react-native';
import {styles} from './Answer.style';
import {TAnswerProps} from './Answer.type';
import {color, size, Text} from '@components';

export const Answer: FC<TAnswerProps> = ({
  answer,
  variation = 'regular',
  onPress,
  containerStyle,
}) => {
  const variationStyle: ViewStyle = {};

  const contentDynamicStyle: ViewStyle = {};

  switch (variation) {
    case 'regular':
      break;
    case 'wrong':
      variationStyle.backgroundColor = color.error;
      break;
    case 'correct':
      variationStyle.backgroundColor = color.success;
      break;
  }

  const containerDynamicStyle = {
    ...variationStyle,
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerDynamicStyle, containerStyle]}>
      <View style={[styles.content]}>
        <Text variation="caption" fontWeight="light">
          {answer}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
