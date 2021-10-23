import React, {FC} from 'react';
import {TGetStartedScreenProps} from './GetStartedScreen.type';
import {GetStartedScreenView} from './GetStartedScreen.view';
import {SignUpScreen} from '@screens';

export const GetStartedScreen: FC<TGetStartedScreenProps> = ({navigation}) => {
  const _onClickGetStarted = () => {
    navigation.navigate(SignUpScreen);
  };
  return <GetStartedScreenView onClickGetStarted={_onClickGetStarted} />;
};
