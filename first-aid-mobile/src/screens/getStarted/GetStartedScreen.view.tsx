import React, {FC} from 'react';
import {styles} from './GetStartedScreen.style';
import {TGetStartedScreenViewProps} from './GetStartedScreen.type';
import {Screen, Button, Section, Text} from '@components';
import {View, TouchableOpacity, ListRenderItemInfo} from 'react-native';

export const GetStartedScreenView: FC<TGetStartedScreenViewProps> = ({
  goToLogin,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <Section>
        <Text>Welcome to First Aid App</Text>
      </Section>
      <Section>
        <Button text="Login" onPress={goToLogin} />
      </Section>
    </Screen>
  );
};
