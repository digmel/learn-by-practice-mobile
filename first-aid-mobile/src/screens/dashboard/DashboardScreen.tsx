import React, {FC} from 'react';
import {ExamScreen} from '@screens';
import {DashboardScreenView} from './DashboardScreen.view';
import {TDashboardScreenProps} from './DashboardScreen.type';

export const DashboardScreen: FC<TDashboardScreenProps> = ({navigation}) => {
  const _goToExam = () => {
    navigation.navigate(ExamScreen);
  };
  return <DashboardScreenView goToExam={_goToExam} />;
};
