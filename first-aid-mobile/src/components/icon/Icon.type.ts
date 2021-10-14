import {TextStyle, ViewStyle, StyleProp} from 'react-native';

export type TIconProps = {
  name: string;
  size?: number;
  color?: string;
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
};
