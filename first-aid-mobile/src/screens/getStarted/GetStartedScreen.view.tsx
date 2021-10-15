import React, {FC} from 'react';
import {styles} from './GetStartedScreen.style';
import {TGetStartedScreenViewProps} from './GetStartedScreen.type';
import {Screen, Button, Section, Text, color} from '@components';
import {Image} from 'react-native';

export const GetStartedScreenView: FC<TGetStartedScreenViewProps> = ({
  goToLogin,
  goToSignUp,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <Section
        containerStyle={styles.imageContainer}
        topSpace={32}
        bottomSpace={64}>
        <Image
          source={require('../../assets/images/get-started-screen.png')}></Image>
      </Section>

      <Section bottomSpace={64}>
        <Text variation="H1" fontWeight="extraBold" color={color.primary100}>
          Learn how to act
        </Text>
        <Text variation="H4" fontWeight="light" color={color.gray500}>
          When every second is important!
        </Text>
      </Section>

      <Section>
        <Button text="Login" onPress={goToLogin} />
      </Section>

      <Section>
        <Button text="Sign Up" variation="secondary" onPress={goToSignUp} />
      </Section>
    </Screen>
  );
};
