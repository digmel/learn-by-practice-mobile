import React, {FC} from 'react';
import {StyleProp, Text as NativeText, TextStyle} from 'react-native';
import {styles} from './Text.style';
import {TTextProps, TTextVariation, TTextWeight} from './Text.type';

const getTextVariation = (
  variation: TTextVariation,
  fontWeight: TTextWeight,
) => {
  let textDynamicStyle: StyleProp<TextStyle> = {};
  switch (variation) {
    case 'H1':
      textDynamicStyle.fontSize = 28;
      break;
    case 'H2':
      textDynamicStyle.fontSize = 24;
      break;
    case 'H3':
      textDynamicStyle.fontSize = 20;
      break;
    case 'H4':
      textDynamicStyle.fontSize = 18;
      break;
    case 'subtitle':
      textDynamicStyle.fontSize = 15;
      break;
    case 'caption':
      textDynamicStyle.fontSize = 13;
      break;
    case 'notes':
      textDynamicStyle.fontSize = 11;
      break;
    case 'button':
      textDynamicStyle.fontSize = 17;
      fontWeight = 'regular';
      break;
    case 'input':
      textDynamicStyle.fontSize = 17;
      fontWeight = 'regular';
      break;
    case 'label':
      textDynamicStyle.fontSize = 14;
      fontWeight = 'light';
      break;
    case 'chips':
      textDynamicStyle.fontSize = 14;
      fontWeight = 'medium';
      break;
  }

  switch (fontWeight) {
    case 'extraBold':
      textDynamicStyle.fontFamily = 'Poppins-ExtraBold';
      break;
    case 'bold':
      textDynamicStyle.fontFamily = 'Poppins-Bold';
      break;
    case 'semiBold':
      textDynamicStyle.fontFamily = 'Poppins-SemiBold';
      break;
    case 'regular':
      textDynamicStyle.fontFamily = 'Poppins-Regular';
      break;
    case 'medium':
      textDynamicStyle.fontFamily = 'Poppins-Medium';
      break;
    case 'light':
      textDynamicStyle.fontFamily = 'Poppins-Light';
      break;
  }

  return textDynamicStyle;
};

export const Text: FC<TTextProps> = ({
  color,
  variation = 'body',
  fontWeight = 'regular',
  textStyle,
  children,
  ...props
}) => {
  const dynamicStyle = getTextVariation(variation, fontWeight);

  const textDynamicStyle: StyleProp<TextStyle> = {
    ...dynamicStyle,
    color,
  };

  return (
    <NativeText style={[styles.text, textDynamicStyle, textStyle]} {...props}>
      {children}
    </NativeText>
  );
};
