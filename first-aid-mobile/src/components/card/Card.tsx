import React, {FC} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {TCardProps} from './Card.type';
import {styles} from './Card.style';
import {color, Text} from '@components';

export const Card: FC<TCardProps> = ({
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
      <View style={[styles.imageContainer, imageContainerStyle]}>
        <Image resizeMode="center" source={image} />
      </View>

      <View style={[styles.titleContainer, titleContainerStyle]}>
        <Text variation="subtitle" color={color.secondary}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
