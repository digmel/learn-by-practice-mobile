import React, {FC, useState, useEffect} from 'react';
import {ExamScreenView} from './ExamScreen.view';
import {
  TAnswer,
  TAnswerStatus,
  TExamScreenViewProps,
  TQuestions,
} from './ExamScreen.type';
import {View} from 'react-native';
import {styles} from './ExamScreen.style';
import {Questions} from './questions';

export const ExamScreen: FC<TExamScreenViewProps> = () => {
  let [_count, _setCount] = useState(0);
  let [_examData, _setExamData] = useState<TQuestions>(Questions[_count]);
  let [_showDetails, _setShowDetails] = useState(false);
  let [_answerA, _setAnswerA] = useState<TAnswerStatus>('empty');
  let [_answerB, _setAnswerB] = useState<TAnswerStatus>('empty');
  let [_answerC, _setAnswerC] = useState<TAnswerStatus>('empty');
  let [_answerD, _setAnswerD] = useState<TAnswerStatus>('empty');

  let [_progress, _setProgress] = useState([
    <View style={styles.progressBarFirstFiller} />,
  ]);

  const checkAnswers = (selectedAnswer: TAnswer) => {
    if (Questions[_count].answer === selectedAnswer) {
      return 'correct';
    } else {
      return 'wrong';
    }
  };

  const clearAnswers = () => {
    _setAnswerA('empty');
    _setAnswerB('empty');
    _setAnswerC('empty');
    _setAnswerD('empty');
  };

  const _onPressA = () => {
    _setShowDetails(true);
    _setAnswerA(checkAnswers('A'));
  };
  const _onPressB = () => {
    _setShowDetails(true);
    _setAnswerB(checkAnswers('B'));
  };
  const _onPressC = () => {
    _setShowDetails(true);
    _setAnswerC(checkAnswers('C'));
  };
  const _onPressD = () => {
    _setShowDetails(true);
    _setAnswerD(checkAnswers('D'));
  };

  const _onPressNext = () => {
    clearAnswers();
    _setCount(_count + 1);
    _setShowDetails(false);
    _setProgress(progress => [
      ...progress,
      <View style={styles.progressBarFiller} />,
    ]);
  };

  const _onPressPrevious = () => {
    clearAnswers();
    _setCount(_count - 1);
    _setShowDetails(false);
    _setProgress(progress => progress.slice(0, progress.length - 1));
  };

  useEffect(() => {
    _setExamData(Questions[_count]);
    console.log('index', _count);
  });

  return (
    <ExamScreenView
      onPressNext={_onPressNext}
      onPressPrevious={_onPressPrevious}
      onPressA={_onPressA}
      onPressB={_onPressB}
      onPressC={_onPressC}
      onPressD={_onPressD}
      AnswerA={_answerA}
      AnswerB={_answerB}
      AnswerC={_answerC}
      AnswerD={_answerD}
      progressBar={_progress}
      showDetails={_showDetails}
      examData={_examData}
    />
  );
};
