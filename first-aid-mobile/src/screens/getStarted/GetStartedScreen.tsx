import React, {FC} from 'react';
import {TGetStartedScreenProps} from './GetStartedScreen.type';
import {GetStartedScreenView} from './GetStartedScreen.view';
import {AuthorizationScreen} from '@screens';

export const GetStartedScreen: FC<TGetStartedScreenProps> = ({navigation}) => {
  const _onClickGetStarted = () => {
    navigation.navigate(AuthorizationScreen);
  };
  return <GetStartedScreenView onClickGetStarted={_onClickGetStarted} />;
};
