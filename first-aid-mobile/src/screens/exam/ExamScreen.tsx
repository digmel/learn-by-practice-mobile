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

  let [_isNextButtonDisabled, _setNextButtonDisabled] = useState(true);
  let [_isPreviousButtonDisabled, _setPreviousButtonDisabled] = useState(true);
  let [_isTestButtonDisabled, _setTestButtonDisabled] = useState(false);

  let [_answerA, _setAnswerA] = useState<TAnswerStatus>('Empty');
  let [_answerB, _setAnswerB] = useState<TAnswerStatus>('Empty');
  let [_answerC, _setAnswerC] = useState<TAnswerStatus>('Empty');
  let [_answerD, _setAnswerD] = useState<TAnswerStatus>('Empty');
  let [_answerStatus, _setAnswerStatus] = useState<TAnswerStatus>('Wrong');

  let [_progress, _setProgress] = useState([
    <View style={styles.progressBarFirstFiller} />,
  ]);

  const checkAnswers = (selectedAnswer: TAnswer) => {
    if (Questions[_count].answer === selectedAnswer) {
      _setAnswerStatus('Correct');
      _setTestButtonDisabled(true);
      _setNextButtonDisabled(false);
      return 'Correct';
    } else {
      _setAnswerStatus('Wrong');
      _setNextButtonDisabled(true);
      return 'Wrong';
    }
  };

  const clearAnswers = () => {
    _setAnswerA('Empty');
    _setAnswerB('Empty');
    _setAnswerC('Empty');
    _setAnswerD('Empty');
    _setTestButtonDisabled(false);
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

    if (_count > 0) {
      _setPreviousButtonDisabled(false);
    } else {
      _setPreviousButtonDisabled(true);
    }

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
      AnswerStatus={_answerStatus}
      progressBar={_progress}
      showDetails={_showDetails}
      examData={_examData}
      isNextButtonDisabled={_isNextButtonDisabled}
      isPreviousButtonDisabled={_isPreviousButtonDisabled}
      isTestButtonDisabled={_isTestButtonDisabled}
    />
  );
};
