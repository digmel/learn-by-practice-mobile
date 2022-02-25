import React, {FC, useState, useEffect} from 'react';
import {ExamScreenView} from './ExamScreen.view';
import {
  TAnswer,
  TAnswerStatus,
  TExamScreenProps,
  TQuestions,
} from './ExamScreen.type';
import {View} from 'react-native';
import {styles} from './ExamScreen.style';
import {Questions} from './questions';
import {ResultScreen} from '@screens';

export const ExamScreen: FC<TExamScreenProps> = ({navigation}) => {
  let [_index, _setIndex] = useState(0);
  let [_examData, _setExamData] = useState<TQuestions>(Questions[_index]);
  let [_showDetails, _setShowDetails] = useState(false);

  let [_isNextButtonDisabled, _setNextButtonDisabled] = useState(true);
  let [_isPreviousButtonDisabled, _setPreviousButtonDisabled] = useState(true);
  let [_isTestButtonDisabled, _setTestButtonDisabled] = useState(false);

  let [_answerStatus, _setAnswerStatus] = useState<boolean>();

  let [_answerA, _setAnswerA] = useState<TAnswerStatus>('Empty');
  let [_answerB, _setAnswerB] = useState<TAnswerStatus>('Empty');
  let [_answerC, _setAnswerC] = useState<TAnswerStatus>('Empty');
  let [_answerD, _setAnswerD] = useState<TAnswerStatus>('Empty');

  let [_progress, _setProgress] = useState([
    <View style={styles.progressBarFirstFiller} />,
  ]);

  const CheckAnswers = (selectedAnswer: TAnswer) => {
    let AnswerStatus: TAnswerStatus = 'Empty';

    _setShowDetails(true);

    if (Questions[_index].answer === selectedAnswer) {
      AnswerStatus = 'Correct';
      _setAnswerStatus(true);
      _setTestButtonDisabled(true);
      _setNextButtonDisabled(false);
      _setPreviousButtonDisabled(false);
    } else {
      AnswerStatus = 'Wrong';
      _setAnswerStatus(false);
      _setTestButtonDisabled(false);
      _setNextButtonDisabled(true);
      _setPreviousButtonDisabled(true);
    }

    switch (selectedAnswer) {
      case 'A':
        _setAnswerA(AnswerStatus);
        break;
      case 'B':
        _setAnswerB(AnswerStatus);
        break;
      case 'C':
        _setAnswerC(AnswerStatus);
        break;
      case 'D':
        _setAnswerD(AnswerStatus);
        break;
    }
  };

  const ClearAnswers = () => {
    _setAnswerA('Empty');
    _setAnswerB('Empty');
    _setAnswerC('Empty');
    _setAnswerD('Empty');
    _setTestButtonDisabled(false);
    _setNextButtonDisabled(true);
    _setPreviousButtonDisabled(true);
  };

  const _onPressA = () => {
    CheckAnswers('A');
  };
  const _onPressB = () => {
    CheckAnswers('B');
  };
  const _onPressC = () => {
    CheckAnswers('C');
  };
  const _onPressD = () => {
    CheckAnswers('D');
  };

  const _onPressNext = () => {
    ClearAnswers();
    _setIndex(_index + 1);
    _setShowDetails(false);
    _setProgress(progress => [
      ...progress,
      <View style={styles.progressBarFiller} />,
    ]);
  };

  const _onPressPrevious = () => {
    ClearAnswers();
    _setIndex(_index - 1);
    _setShowDetails(true);
    _setProgress(progress => progress.slice(0, progress.length - 1));
  };

  useEffect(() => {
    _setExamData(Questions[_index]);

    _index === 0 && _setPreviousButtonDisabled(true);

    _index === 12 && navigation.navigate(ResultScreen);

    console.log('index', _index);
  });

  return (
    <ExamScreenView
      index={_index}
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
