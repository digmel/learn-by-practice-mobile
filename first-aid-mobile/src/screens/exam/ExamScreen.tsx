import React, {FC, useState} from 'react';
import {ExamScreenView} from './ExamScreen.view';
import {TExamScreenViewProps} from './ExamScreen.type';
import {View} from 'react-native';
import {styles} from './ExamScreen.style';

export const ExamScreen: FC<TExamScreenViewProps> = () => {
  let [_progress, _setProgress] = useState([
    <View style={styles.progressBarFirstFiller} />,
  ]);

  let [_showDetails, _setShowDetails] = useState(false);

  const _onPressNext = () => {
    _setProgress(progress => [
      ...progress,
      <View style={styles.progressBarFiller} />,
    ]);

    _setShowDetails(true);
  };

  const _onPressPrevious = () => {
    _setProgress(progress => progress.slice(0, progress.length - 1));
  };

  return (
    <ExamScreenView
      onPressNext={_onPressNext}
      onPressPrevious={_onPressPrevious}
      progressBar={_progress}
      showDetails={_showDetails}
    />
  );
};
