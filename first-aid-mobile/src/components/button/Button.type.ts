import {ViewStyle, TextStyle, StyleProp} from 'react-native';
import type {size} from '@components';

export type TButtonVariation =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'google'
  | 'facebook'
  | 'apple'
  | 'login';

export type TButtonSize = 'large' | 'medium' | 'small';

export type TButtonProps = {
  text: string;
  onPress?: Function;
  variation?: TButtonVariation;
  isDisabled?: boolean;
  isFluid?: boolean;
  size?: TButtonSize;
  isUppercase?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  textStyle?: StyleProp<TextStyle>;
  iconLeft?: string;
  iconRight?: string;
  iconSize?: typeof size;
  iconContainerStyle?: StyleProp<ViewStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
};
