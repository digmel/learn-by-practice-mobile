import {TextStyle, StyleProp} from 'react-native';

export type TTextVariation =
  | 'H1'
  | 'H2'
  | 'H4'
  | 'H3'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'notes'
  | 'label'
  | 'chips'
  | 'button'
  | 'input';

export type TTextWeight =
  | 'extraBold'
  | 'bold'
  | 'semiBold'
  | 'regular'
  | 'medium'
  | 'light';

export type TTextProps = {
  variation?: TTextVariation;
  fontWeight?: TTextWeight;
  textStyle?: StyleProp<TextStyle>;
  color?: string;
};
