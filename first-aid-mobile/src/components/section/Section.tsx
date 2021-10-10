import React, {FC} from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import {styles} from './Section.style';
import {TSectionProps} from './Section.type';
import {size} from '@components';

export const Section: FC<TSectionProps> = ({
  containerStyle,
  isFullWidth = false,
  children,
  topSpace,
  bottomSpace,
  ...props
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
    <View
      style={[styles.container, containerDynamicStyle, containerStyle]}
      {...props}>
      {children}
    </View>
  );
};
