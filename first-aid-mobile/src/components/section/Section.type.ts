import type {ReactNode} from 'react';
import type {ViewStyle, StyleProp} from 'react-native';

export type TSectionVariation = 'primary' | 'headline';

export type TSectionProps = {
  variation?: TSectionVariation;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  isFullWidth?: boolean;
  topSpace?: number;
  bottomSpace?: number;
};
