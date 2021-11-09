import React, {FC} from 'react';
import {ExamScreen, TheoryScreen} from '@screens';
import {DashboardScreenView} from './DashboardScreen.view';
import {TDashboardScreenProps} from './DashboardScreen.type';

export const DashboardScreen: FC<TDashboardScreenProps> = ({navigation}) => {
  const _goToExam = () => {
    navigation.navigate(ExamScreen);
  };
  const _goToTheoryScreen = () => {
    navigation.navigate(TheoryScreen);
  };
  return (
    <DashboardScreenView
      goToExam={_goToExam}
      goToTheoryScreen={_goToTheoryScreen}
    />
  );
};
