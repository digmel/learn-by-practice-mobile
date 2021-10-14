import React, {FC} from 'react';
import {TResetPasswordScreenViewProps} from './ResetPasswordScreen.type';
import {Section, Screen, TextInput, Button, Header, Text} from '@components';

export const ResetPasswordScreenView: FC<TResetPasswordScreenViewProps> = ({
  userEmail,
  setUserEmail,
  emailError,
  onPressSendResetPassword,
}) => {
  return (
    <Screen
      isScrollViewDisabled
      header={
        <Header hasBack>
          <Text>header</Text>
        </Header>
      }>
      <Section>
        <TextInput
          label="E-mail address"
          value={userEmail}
          onChangeText={(input: string) => setUserEmail(input)}
          errorMessage={emailError}
        />
      </Section>
      <Section>
        <Button onPress={onPressSendResetPassword} text="Send Reset Password" />
      </Section>
    </Screen>
  );
};
