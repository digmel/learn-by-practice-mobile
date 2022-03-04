import React, {FC, useState, useEffect} from 'react';
import {ExamScreenView} from './ExamScreen.view';
import {
  TAnswer,
  TAnswerStatus,
  TExamScreenProps,
  TQuestions,
} from './ExamScreen.type';
import {Questions} from './questions';
import {ResultScreen} from '@screens';

export const ExamScreen: FC<TExamScreenProps> = ({navigation}) => {
  let [_index, _setIndex] = useState(0);
  let [_examData, _setExamData] = useState<TQuestions>(Questions[_index]);
  let [_showDetails, _setShowDetails] = useState(false);

  let [allSelectedAnswers, setAllSelectedAnswers] = useState<
    Array<Array<String>>
  >([]);
  let [selectedData, setSelectedData] = useState<Array<String>>([]);

  let [_isNextButtonDisabled, _setNextButtonDisabled] = useState(true);
  let [_isPreviousButtonDisabled, _setPreviousButtonDisabled] = useState(true);
  let [_isTestButtonDisabled, _setTestButtonDisabled] = useState(false);

  let [_answerStatus, _setAnswerStatus] = useState<boolean>();

  let [_answerA, _setAnswerA] = useState<TAnswerStatus>('Empty');
  let [_answerB, _setAnswerB] = useState<TAnswerStatus>('Empty');
  let [_answerC, _setAnswerC] = useState<TAnswerStatus>('Empty');
  let [_answerD, _setAnswerD] = useState<TAnswerStatus>('Empty');

  const CheckAnswers = (selectedAnswer: TAnswer | String) => {
    let AnswerStatusInList: TAnswerStatus = 'Empty';

    _setShowDetails(true);

    if (Questions[_index].answer === selectedAnswer) {
      AnswerStatusInList = 'Correct';
      _setAnswerStatus(true);
      _setTestButtonDisabled(true);
      _setNextButtonDisabled(false);
    } else {
      AnswerStatusInList = 'Wrong';
      _setAnswerStatus(false);
      _setTestButtonDisabled(false);
      _setNextButtonDisabled(true);
    }

    switch (selectedAnswer) {
      case 'A':
        _setAnswerA(AnswerStatusInList);
        break;
      case 'B':
        _setAnswerB(AnswerStatusInList);
        break;
      case 'C':
        _setAnswerC(AnswerStatusInList);
        break;
      case 'D':
        _setAnswerD(AnswerStatusInList);
        break;
    }
  };

  const ClearAnswers = () => {
    _setAnswerA('Empty');
    _setAnswerB('Empty');
    _setAnswerC('Empty');
    _setAnswerD('Empty');
  };

  const SaveSelectedAnswers = (selectedAnswer: TAnswer) => {
    setSelectedData([...selectedData, selectedAnswer]);
  };

  const ShowSelectedAnswers = () => {
    if (allSelectedAnswers.length > 0 && allSelectedAnswers[_index]) {
      allSelectedAnswers[_index].forEach((selected: TAnswer | String) => {
        CheckAnswers(selected);
      });
    }
  };

  const _onPressA = () => {
    SaveSelectedAnswers('A');
    CheckAnswers('A');
  };
  const _onPressB = () => {
    SaveSelectedAnswers('B');
    CheckAnswers('B');
  };
  const _onPressC = () => {
    SaveSelectedAnswers('C');
    CheckAnswers('C');
  };
  const _onPressD = () => {
    SaveSelectedAnswers('D');
    CheckAnswers('D');
  };

  const _onPressNext = () => {
    ClearAnswers();
    _setIndex(_index + 1);
    _setShowDetails(false);

    setSelectedData([]);

    if (selectedData.length > 0) {
      setAllSelectedAnswers([...allSelectedAnswers, selectedData]);
    }

    _setTestButtonDisabled(false);
    _setPreviousButtonDisabled(false);
    _setNextButtonDisabled(true);
  };

  const _onPressPrevious = () => {
    ClearAnswers();
    _setIndex(_index - 1);
    _setShowDetails(true);
    setSelectedData([]);
    _setTestButtonDisabled(true);
    _setNextButtonDisabled(false);
  };

  useEffect(() => {
    _setExamData(Questions[_index]);
    ShowSelectedAnswers();

    _index === 0 && _setPreviousButtonDisabled(true);

    _index === 12 && navigation.navigate(ResultScreen);
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
      showDetails={_showDetails}
      examData={_examData}
      isNextButtonDisabled={_isNextButtonDisabled}
      isPreviousButtonDisabled={_isPreviousButtonDisabled}
      isTestButtonDisabled={_isTestButtonDisabled}
    />
  );
};

[
  ['a', 'b'],
  ['a', 'c'],
];
