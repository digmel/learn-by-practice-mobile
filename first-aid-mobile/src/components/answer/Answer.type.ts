import type {ViewStyle, StyleProp} from 'react-native';

export type TAnswerVariation = 'regular' | 'wrong' | 'correct';

export type TAnswerProps = {
  answer: string;
  variation?: TAnswerVariation;
  onPress?: Function;
  containerStyle?: StyleProp<ViewStyle>;
};
