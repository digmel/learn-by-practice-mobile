import {ViewStyle, StyleProp, ImageSourcePropType} from 'react-native';

export type TCardProps = {
  title: String;
  image: ImageSourcePropType;
  onPress?: Function;
  titleContainerStyle?: StyleProp<ViewStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  cardStyle?: StyleProp<ViewStyle>;
  cardContainerStyle?: StyleProp<ViewStyle>;
};
