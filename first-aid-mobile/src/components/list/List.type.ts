import {TAnswerStatus} from 'screens/exam/ExamScreen.type';

export type TListVariation = 'empty' | 'correct' | 'wrong';

export type TListProps = {
  children?: String;
  variation?: TAnswerStatus;
  onPress?: Function;
};
