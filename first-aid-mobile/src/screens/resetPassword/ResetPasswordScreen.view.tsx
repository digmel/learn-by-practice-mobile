import React, {FC} from 'react';
import {TResetPasswordScreenViewProps} from './ResetPasswordScreen.type';
import {Section, Screen, TextInput, Button} from '@components';

export const ResetPasswordScreenView: FC<TResetPasswordScreenViewProps> = ({
  userEmail,
  setUserEmail,
  emailError,
  onPressSendResetPassword,
}) => {
  return (
    <Screen isScrollViewDisabled>
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
