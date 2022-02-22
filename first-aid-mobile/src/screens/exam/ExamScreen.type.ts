import {TQuestions} from './questions';

export type TExamScreenViewProps = {
  onPressNext: Function;
  onPressPrevious: Function;
  progressBar: Array<any>;
  showDetails: boolean;
  examData: TQuestions;
  onPressA: Function;
};
