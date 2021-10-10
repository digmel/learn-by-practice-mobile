import React, {FC} from 'react';
import {TGetStartedScreenProps} from './GetStartedScreen.type';
import {GetStartedScreenView} from './GetStartedScreen.view';
import {LoginScreen} from '@screens';

export const GetStartedScreen: FC<TGetStartedScreenProps> = ({navigation}) => {
  const _goToLogin = () => {
    navigation.navigate(LoginScreen);
  };
  return <GetStartedScreenView goToLogin={_goToLogin} />;
};
