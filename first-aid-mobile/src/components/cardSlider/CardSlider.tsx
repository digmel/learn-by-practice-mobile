import React, {FC} from 'react';
import {TCardSliderProps} from './CardSlider.type';
import {styles} from './CardSlider.style';
import {Text, color} from '@components';
import {ScrollView, View} from 'react-native';

export const CardSlider: FC<TCardSliderProps> = ({
  title,
  subTitle,
  titleContainerStyle,
  containerStyle,
  children,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.titleContainer, titleContainerStyle]}>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
      <ScrollView
        horizontal
        indicatorStyle="white"
        style={[styles.container, containerStyle]}>
        {children}
      </ScrollView>
    </View>
  );
};
