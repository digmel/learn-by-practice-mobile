import React, {FC, useState} from 'react';
import {ExamScreenView} from './ExamScreen.view';
import {TExamScreenViewProps} from './ExamScreen.type';
import {View} from 'react-native';
import {styles} from './ExamScreen.style';

export const ExamScreen: FC<TExamScreenViewProps> = () => {
  let [progress, setProgress] = useState([
    <View style={styles.progressBarFirstFiller} />,
  ]);

  const _onPressNext = () => {
    setProgress(progress => [
      ...progress,
      <View style={styles.progressBarFiller} />,
    ]);
  };

  const _onPressPrevious = () => {
    setProgress(progress => progress.slice(0, progress.length - 1));
  };

  return (
    <ExamScreenView
      onPressNext={_onPressNext}
      onPressPrevious={_onPressPrevious}
      progressBar={progress}
    />
  );
};
