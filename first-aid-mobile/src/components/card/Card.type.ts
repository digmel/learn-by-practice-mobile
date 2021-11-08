import {ViewStyle, StyleProp, ImageSourcePropType} from 'react-native';

export type TCardProps = {
  title: String;
  svg?: ImageSourcePropType;
  onPress?: Function;
};
