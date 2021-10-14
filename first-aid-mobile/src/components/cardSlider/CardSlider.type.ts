import {ReactNode} from 'react';
import type {ViewStyle, StyleProp} from 'react-native';

export type TCardSliderProps = {
  title?: string;
  titleContainerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};
