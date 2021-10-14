import React, {FC} from 'react';
import {styles} from './GetStartedScreen.style';
import {TGetStartedScreenViewProps} from './GetStartedScreen.type';
import {Screen, Button, Section, Text, ScreenUnprotected} from '@components';

export const GetStartedScreenView: FC<TGetStartedScreenViewProps> = ({
  goToLogin,
  goToSignUp,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <ScreenUnprotected>
        <Section>
          <Text>Welcome to First Aid App</Text>
        </Section>
        <Section>
          <Button text="Login" onPress={goToLogin} />
        </Section>

        <Section>
          <Button text="Sign Up" variation="secondary" onPress={goToSignUp} />
        </Section>
      </ScreenUnprotected>
    </Screen>
  );
};
