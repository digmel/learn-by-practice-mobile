import React, {FC} from 'react';
import {TResetPasswordScreenViewProps} from './ResetPasswordScreen.type';
import {
  Section,
  Screen,
  TextInput,
  Button,
  Header,
  size,
  ResetPasswordScreenSvg,
} from '@components';
import {styles} from './ResetPasswordScreen.style';

export const ResetPasswordScreenView: FC<TResetPasswordScreenViewProps> = ({
  userEmail,
  setUserEmail,
  emailError,
  onPressSendResetPassword,
}) => {
  return (
    <Screen isScrollViewDisabled header={<Header hasBack />}>
      <Section topSpace={size.xl} containerStyle={styles.svgContainer}>
        <ResetPasswordScreenSvg />
      </Section>

      <Section topSpace={size.l}>
        <TextInput
          label="E-mail address"
          value={userEmail}
          onChangeText={(input: string) => setUserEmail(input)}
          errorMessage={emailError}
        />
      </Section>

      <Section topSpace={size.xl}>
        <Button onPress={onPressSendResetPassword} text="Send Reset Link" />
      </Section>
    </Screen>
  );
};
