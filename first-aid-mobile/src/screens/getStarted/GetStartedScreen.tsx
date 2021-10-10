import React, {FC} from 'react';
import {TGetStartedScreenProps} from './GetStartedScreen.type';
import {GetStartedScreenView} from './GetStartedScreen.view';
import {LoginScreen, SignUpScreen} from '@screens';

export const GetStartedScreen: FC<TGetStartedScreenProps> = ({navigation}) => {
  const _goToLogin = () => {
    navigation.navigate(LoginScreen);
  };

  const _goToSignUp = () => {
    navigation.navigate(SignUpScreen);
  };
  return (
    <GetStartedScreenView goToLogin={_goToLogin} goToSignUp={_goToSignUp} />
  );
};
