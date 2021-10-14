import React, {FC} from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import {styles} from './ScreenUnprotected.style';
import {TScreenUnprotectedProps} from './ScreenUnprotected.type';
import {size, Logo} from '@components';

export const ScreenUnprotected: FC<TScreenUnprotectedProps> = ({
  containerStyle,
  contentStyle,
  logoContainerStyle,
  isFullWidth = false,
  children,
}) => {
  const fullWidthStyle = isFullWidth && {marginHorizontal: -size.xl};

  const containerDynamicStyle: StyleProp<ViewStyle> = {
    ...fullWidthStyle,
  };

  return (
    <View style={[styles.container, containerDynamicStyle, containerStyle]}>
      <View style={[styles.logoContainer, logoContainerStyle]}>
        <Logo />
      </View>
      <View style={[styles.content, contentStyle]}>{children}</View>
    </View>
  );
};
