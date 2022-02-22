import {TQuestions} from './questions';

export type TExamScreenViewProps = {
  onPressNext: Function;
  onPressPrevious: Function;
  onPressA: Function;
  onPressB: Function;
  onPressC: Function;
  onPressD: Function;
  progressBar: Array<any>;
  showDetails: boolean;
  examData: TQuestions;
};
