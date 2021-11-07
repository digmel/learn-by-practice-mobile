import React, {FC} from 'react';
import {StyleProp, Text as NativeText, TextStyle} from 'react-native';
import {styles} from './Text.style';
import {TTextProps} from './Text.type';
import {color as configColor} from '@components';

export const Text: FC<TTextProps> = ({
  color = configColor.primary,
  variation = 'body_light',
  textStyle,
  children,
  ...props
}) => {
  let variationStyle: StyleProp<TextStyle> = {};

  switch (variation) {
    case 'H1_bold':
      variationStyle.fontFamily = 'Poppins-ExtraBold';
      variationStyle.fontSize = 18;
      break;
    case 'H1_light':
      variationStyle.fontFamily = 'Poppins-ExtraLight';
      variationStyle.fontSize = 18;
      break;
    case 'title':
      variationStyle.fontFamily = 'Poppins-Light';
      variationStyle.fontSize = 14;
      break;
    case 'subtitle':
      variationStyle.fontFamily = 'Poppins-ExtraLight';
      variationStyle.fontSize = 14;
      break;
    case 'body_bold':
      variationStyle.fontFamily = 'Poppins-Medium';
      variationStyle.fontSize = 16;
      break;
    case 'body_light':
      variationStyle.fontFamily = 'Poppins-Light';
      variationStyle.fontSize = 16;
      break;
    case 'button':
      variationStyle.fontFamily = 'Poppins-Regular';
      variationStyle.fontSize = 16;
      break;
    case 'input':
      variationStyle.fontFamily = 'Poppins-Regular';
      variationStyle.fontSize = 14;
      variationStyle.color = configColor.gray400;
      break;
  }

  const textDynamicStyle: StyleProp<TextStyle> = {
    ...variationStyle,
    color,
  };

  return (
    <NativeText style={[styles.text, textDynamicStyle, textStyle]} {...props}>
      {children}
    </NativeText>
  );
};
