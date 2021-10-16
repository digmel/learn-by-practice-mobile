import type {ViewStyle, StyleProp} from 'react-native';

export type TBannerProps = {
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  isFullWidth?: boolean;
  topSpace?: number;
  bottomSpace?: number;
  onPress?: Function;
};
