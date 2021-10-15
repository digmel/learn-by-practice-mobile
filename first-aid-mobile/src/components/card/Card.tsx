import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TCardProps} from './Card.type';
import {styles} from './Card.style';
import {Text} from '@components';

export const Card: FC<TCardProps> = ({
  children,
  onPress,
  title,
  image,
  imageContainerStyle,
  titleContainerStyle,
  cardStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, cardStyle]}
      onPress={() => onPress && onPress()}>
      <View style={[styles.imageContainer, imageContainerStyle]}></View>

      <View style={[styles.titleContainer, titleContainerStyle]}>
        <Text variation="H4">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
