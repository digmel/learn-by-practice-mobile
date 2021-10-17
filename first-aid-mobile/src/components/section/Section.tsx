import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';
import {styles} from './Section.style';
import {TSectionProps} from './Section.type';
import {color, size} from '@components';

export const Section: FC<TSectionProps> = ({
  variation,
  containerStyle,
  isFullWidth = false,
  children,
  topSpace,
  bottomSpace,
  contentStyle,
}) => {
  const fullWidthStyle = isFullWidth && {marginHorizontal: -size.xl};

  const topSpaceStyle = !!topSpace && {marginTop: topSpace};

  const bottomSpaceStyle = !!bottomSpace
    ? {marginBottom: bottomSpace}
    : {marginBottom: size.m};

  const variationStyle: ViewStyle = {};

  const contentDynamicStyle: ViewStyle = {};

  switch (variation) {
    case 'primary':
      variationStyle.backgroundColor = color.primary;
      variationStyle.paddingVertical = size.l;
      variationStyle.borderBottomRightRadius = size.xl;
      variationStyle.borderTopRightRadius = 110;
      variationStyle.marginLeft = -size.xl;
      contentDynamicStyle.paddingLeft = size.xl;
      break;
    case 'secondary':
      variationStyle.backgroundColor = color.accent;
      variationStyle.paddingVertical = size.l;
      variationStyle.borderBottomLeftRadius = size.xl;
      variationStyle.borderTopLeftRadius = 70;
      variationStyle.marginRight = -size.xl;
      contentDynamicStyle.paddingLeft = size.xl;
      break;
  }

  const containerDynamicStyle = {
    ...variationStyle,
    ...fullWidthStyle,
    ...topSpaceStyle,
    ...bottomSpaceStyle,
  };

  return (
    <View style={[styles.container, containerDynamicStyle, containerStyle]}>
      <View style={[styles.content, contentDynamicStyle, contentStyle]}>
        {children}
      </View>
    </View>
  );
};
