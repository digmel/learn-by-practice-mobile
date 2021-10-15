import React, {FC} from 'react';
import {TResetPasswordScreenViewProps} from './ResetPasswordScreen.type';
import {Section, Screen, TextInput, Button, Header, size} from '@components';
import {Image} from 'react-native';
import {styles} from 'screens/getStarted/GetStartedScreen.style';

export const ResetPasswordScreenView: FC<TResetPasswordScreenViewProps> = ({
  userEmail,
  setUserEmail,
  emailError,
  onPressSendResetPassword,
}) => {
  return (
    <Screen isScrollViewDisabled header={<Header hasBack />}>
      <Section
        containerStyle={styles.imageContainer}
        topSpace={size.xl}
        bottomSpace={size.xxl}>
        <Image
          source={require('../../assets/images/reset-password-screen.png')}
        />
      </Section>

      <Section>
        <TextInput
          label="E-mail address"
          value={userEmail}
          onChangeText={(input: string) => setUserEmail(input)}
          errorMessage={emailError}
        />
      </Section>

      <Section>
        <Button onPress={onPressSendResetPassword} text="Send Reset Link" />
      </Section>
    </Screen>
  );
};
