import {DashboardScreen, ExamScreen} from '@screens';
import React, {FC} from 'react';
import {TResultScreenProps} from './ResultScreen.type';
import {ResultScreenView} from './ResultScreen.view';

export const ResultScreen: FC<TResultScreenProps> = ({navigation}) => {
  const _onPressHomepage = () => {
    navigation.navigate(DashboardScreen);
  };

  const _onPressTryAgain = () => {
    navigation.navigate(ExamScreen);
  };
  return (
    <ResultScreenView
      onPressHomepage={_onPressHomepage}
      onPressTryAgain={_onPressTryAgain}
    />
  );
};
