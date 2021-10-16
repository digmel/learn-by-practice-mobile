import React, {FC} from 'react';
import {styles} from './GetStartedScreen.style';
import {TGetStartedScreenViewProps} from './GetStartedScreen.type';
import {Screen, Button, Section, Text, color, size} from '@components';
import {Image} from 'react-native';

export const GetStartedScreenView: FC<TGetStartedScreenViewProps> = ({
  goToLogin,
  goToSignUp,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <Section
        containerStyle={styles.imageContainer}
        topSpace={size.xl}
        bottomSpace={size.xxl}>
        <Image source={require('assets/images/get-started-screen.png')}></Image>
      </Section>

      <Section bottomSpace={size.xxl}>
        <Text variation="H1" fontWeight="extraBold" color={color.primary}>
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
