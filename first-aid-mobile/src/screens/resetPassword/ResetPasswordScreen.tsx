import React, {useState, FC} from 'react';
import {ResetPasswordScreenView} from './ResetPasswordScreen.view';
import {TResetPasswordScreenProps} from './ResetPasswordScreen.type';
import {Alert} from 'react-native';

export const ResetPasswordScreen: FC<TResetPasswordScreenProps> = () => {
  const [_userEmail, _setUserEmail] = useState<string>('');
  const [_emailError, setEmailError] = useState<string | undefined>();

  const _onPressSendResetPassword = () => {
    Alert.alert('Password Reset Link Sent', 'please check your email', [
      {text: 'OK'},
    ]);
  };

  return (
    <ResetPasswordScreenView
      userEmail={_userEmail}
      emailError={_emailError}
      setUserEmail={_setUserEmail}
      onPressSendResetPassword={_onPressSendResetPassword}
    />
  );
};
