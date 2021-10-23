import React, {FC} from 'react';
import {TGetStartedScreenProps} from './GetStartedScreen.type';
import {GetStartedScreenView} from './GetStartedScreen.view';
import {AuthorizationScreen} from '@screens';

export const GetStartedScreen: FC<TGetStartedScreenProps> = ({navigation}) => {
  const _onPressGetStarted = () => {
    navigation.navigate(AuthorizationScreen);
  };
  return <GetStartedScreenView onPressGetStarted={_onPressGetStarted} />;
};
