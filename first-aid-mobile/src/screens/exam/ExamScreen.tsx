import React, {FC, useState, useEffect} from 'react';
import {ExamScreenView} from './ExamScreen.view';
import {TExamScreenViewProps} from './ExamScreen.type';
import {View} from 'react-native';
import {styles} from './ExamScreen.style';
import {Questions} from './questions';

export const ExamScreen: FC<TExamScreenViewProps> = () => {
  let [_count, _setCount] = useState(0);
  let [_examData, _setExamData] = useState(Questions[_count]);
  let [_showDetails, _setShowDetails] = useState(false);

  let [_progress, _setProgress] = useState([
    <View style={styles.progressBarFirstFiller} />,
  ]);

  const _onPressA = () => {
    _setShowDetails(true);
  };
  const _onPressB = () => {
    _setShowDetails(true);
  };
  const _onPressC = () => {
    _setShowDetails(true);
  };
  const _onPressD = () => {
    _setShowDetails(true);
  };

  const _onPressNext = () => {
    _setCount(_count + 1);
    _setShowDetails(false);
    _setProgress(progress => [
      ...progress,
      <View style={styles.progressBarFiller} />,
    ]);
  };

  const _onPressPrevious = () => {
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
      progressBar={_progress}
      showDetails={_showDetails}
      examData={_examData}
    />
  );
};
