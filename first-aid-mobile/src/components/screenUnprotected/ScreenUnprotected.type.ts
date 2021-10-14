import type {ReactNode} from 'react';
import type {ViewStyle, StyleProp} from 'react-native';

export type TScreenUnprotectedProps = {
  containerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  isFullWidth?: boolean;
  logoContainerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};
