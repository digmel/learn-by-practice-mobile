import {ViewStyle, StyleProp} from 'react-native';

export type TCardProps = {
  title?: String;
  image?: String;
  onPress?: Function;
  titleContainerStyle?: StyleProp<ViewStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  cardStyle?: StyleProp<ViewStyle>;
};
