import React, {FC} from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import {styles} from './Banner.style';
import {TBannerProps} from './Banner.type';
import {size, Text, Button, color, Icon} from '@components';

export const Banner: FC<TBannerProps> = ({
  title,
  containerStyle,
  isFullWidth = false,
  topSpace,
  bottomSpace,
  onPress,
}) => {
  const fullWidthStyle = isFullWidth && {marginHorizontal: -size.xl};

  const topSpaceStyle = !!topSpace && {marginTop: topSpace};

  const bottomSpaceStyle = !!bottomSpace
    ? {marginBottom: bottomSpace}
    : {marginBottom: size.m};

  const containerDynamicStyle: StyleProp<ViewStyle> = {
    ...fullWidthStyle,
    ...topSpaceStyle,
    ...bottomSpaceStyle,
  };

  return (
    <View style={[styles.container, containerDynamicStyle, containerStyle]}>
      <Text variation="H2" color={color.secondary}>
        {title}
      </Text>

      <Icon name="logo" size={size.xxl} color={color.secondary} />
      <Button
        variation="google"
        size="large"
        text="Start Test"
        onPress={onPress}
      />
    </View>
  );
};
