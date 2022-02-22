export type TAnswerStatus = 'empty' | 'correct' | 'wrong';

export type TAnswer = 'A' | 'B' | 'C' | 'D';

export type TQuestions = {
  question: String;
  A: String;
  B: String;
  C: String;
  D: String;
  answer: String;
  details: String;
};

export type TExamScreenViewProps = {
  onPressNext: Function;
  onPressPrevious: Function;
  onPressA: Function;
  onPressB: Function;
  onPressC: Function;
  onPressD: Function;
  progressBar: Array<any>;
  showDetails: boolean;
  AnswerA: TAnswerStatus;
  AnswerB: TAnswerStatus;
  AnswerC: TAnswerStatus;
  AnswerD: TAnswerStatus;
  examData: TQuestions;
};
