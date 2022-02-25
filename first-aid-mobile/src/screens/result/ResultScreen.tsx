import {DashboardScreen, ExamScreen} from '@screens';
import React, {FC} from 'react';
import {TResultScreenProps} from './ResultScreen.type';
import {ResultScreenView} from './ResultScreen.view';

export const ResultScreen: FC<TResultScreenProps> = ({navigation}) => {
  const _onPressGoHome = () => {
    navigation.navigate(DashboardScreen);
  };

  const _onPressTryAgain = () => {
    navigation.navigate(ExamScreen);
  };
  return (
    <ResultScreenView
      onPressGoHome={_onPressGoHome}
      onPressTryAgain={_onPressTryAgain}
    />
  );
};
