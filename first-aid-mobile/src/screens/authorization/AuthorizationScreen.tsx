import React, {FC} from 'react';
import {TAuthorizationScreenProps} from './AuthorizationScreen.type';
import {AuthorizationScreenView} from './AuthorizationScreen.view';
import {SignUpScreen} from '@screens';

export const AuthorizationScreen: FC<TAuthorizationScreenProps> = ({
  navigation,
}) => {
  const _onClickAuthorization = () => {
    navigation.navigate(SignUpScreen);
  };
  return (
    <AuthorizationScreenView onClickAuthorization={_onClickAuthorization} />
  );
};
