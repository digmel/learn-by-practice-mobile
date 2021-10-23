import React, {FC} from 'react';
import {styles} from './LoginScreen.style';
import {TLoginScreenViewProps} from './LoginScreen.type';
import {
  Section,
  Button,
  Text,
  Screen,
  size,
  TextInput,
  Header,
} from '@components';

export const LoginScreenView: FC<TLoginScreenViewProps> = ({
  goToResetPasswordScreen,
}) => {
  return (
    <Screen isScrollViewDisabled header={<Header hasBack></Header>}>
      <Section topSpace={size.xl} bottomSpace={size.xxl}>
        <Text variation="H1" fontWeight="extraBold" textStyle={styles.text}>
          Welcome
        </Text>
      </Section>

      <Section bottomSpace={size.xl}>
        <TextInput label="Email" />
      </Section>

      <Section>
        <TextInput label="Password" secureTextEntry />
      </Section>

      <Section bottomSpace={size.xl}>
        <Button
          variation="link"
          text="Reset Password"
          onPress={goToResetPasswordScreen}></Button>
      </Section>

      <Section>
        <Button text="Login" />
      </Section>
    </Screen>
  );
};
