import React, {FC} from 'react';
import {ExamScreen, AllergicReactionScreen} from '@screens';
import {DashboardScreenView} from './DashboardScreen.view';
import {TDashboardScreenProps} from './DashboardScreen.type';

export const DashboardScreen: FC<TDashboardScreenProps> = ({navigation}) => {
  const _goToExam = () => {
    navigation.navigate(ExamScreen);
  };
  const _goToAllergicReactionScreen = () => {
    navigation.navigate(AllergicReactionScreen);
  };
  return (
    <DashboardScreenView
      goToExam={_goToExam}
      goToAllergicReactionScreen={_goToAllergicReactionScreen}
    />
  );
};
