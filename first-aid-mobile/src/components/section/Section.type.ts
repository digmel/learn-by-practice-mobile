import type {ReactNode} from 'react';
import type {ViewStyle, StyleProp} from 'react-native';

export type TSectionProps = {
  containerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  isFullWidth?: boolean;
  topSpace?: number;
  bottomSpace?: number;
};
