export type TAnswerVariation = 'regular' | 'wrong' | 'correct';

export type TAnswerProps = {
  answer: string;
  variation?: TAnswerVariation;
  onPress?: Function;
};
