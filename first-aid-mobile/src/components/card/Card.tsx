import React, {FC} from 'react';
import {View, Image} from 'react-native';
import {TCardProps} from './Card.type';
import {styles} from './Card.style';
import {color, Text} from '@components';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Card: FC<TCardProps> = ({
  onPress,
  title,
  image,
  imageContainerStyle,
  titleContainerStyle,
  cardStyle,
  cardContainerStyle,
}) => {
  return (
    <View style={[styles.container, cardContainerStyle]}>
      <TouchableOpacity
        style={[styles.card, cardStyle]}
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
    </View>
  );
};
