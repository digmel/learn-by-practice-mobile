import React, {FC} from 'react';
import {TLoginScreenProps} from './LoginScreen.type';
import {LoginScreenView} from './LoginScreen.view';
import {ResetPasswordScreen} from '@screens';

export const LoginScreen: FC<TLoginScreenProps> = ({navigation}) => {
  const _goToResetPasswordScreen = () => {
    navigation.navigate(ResetPasswordScreen);
  };
  return <LoginScreenView goToResetPasswordScreen={_goToResetPasswordScreen} />;
};
