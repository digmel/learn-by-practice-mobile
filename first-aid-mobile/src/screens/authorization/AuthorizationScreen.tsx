import React, {FC} from 'react';
import {TAuthorizationScreenProps} from './AuthorizationScreen.type';
import {AuthorizationScreenView} from './AuthorizationScreen.view';
import {LoginScreen, SignUpScreen} from '@screens';

export const AuthorizationScreen: FC<TAuthorizationScreenProps> = ({
  navigation,
}) => {
  const _onPressFacebook = () => {};

  const _onPressGoogle = () => {};

  const _onPressEmail = () => {
    navigation.navigate(LoginScreen);
  };

  const _onPressSignUp = () => {
    navigation.navigate(SignUpScreen);
  };
  return (
    <AuthorizationScreenView
      onPressSignUp={_onPressSignUp}
      onPressEmail={_onPressEmail}
      onPressFacebook={_onPressFacebook}
      onPressGoogle={_onPressGoogle}
    />
  );
};
