import React, {FC} from 'react';
import {styles} from './LoginScreen.style';
import {TLoginScreenViewProps} from './LoginScreen.type';
import {
  Section,
  Button,
  Text,
  Screen,
  color,
  size,
  TextInput,
  Header,
} from '@components';

export const LoginScreenView: FC<TLoginScreenViewProps> = ({
  goToResetPasswordScreen,
}) => {
  return (
    <Screen isScrollViewDisabled header={<Header hasBack></Header>}>
      <Section>
        <Button
          text="Continue with Google"
          iconLeft="google"
          variation="google"
          textContainerStyle={styles.textContainer}
          iconContainerStyle={styles.iconContainer}
        />
      </Section>

      <Section>
        <Button
          iconLeft="facebook"
          text="Continue with Facebook"
          variation="facebook"
          textContainerStyle={styles.textContainer}
          iconContainerStyle={styles.iconContainer}
        />
      </Section>

      <Section
        bottomSpace={size.l}
        topSpace={size.l}
        containerStyle={styles.textSection}>
        <Text variation="subtitle" color={color.gray500}>
          Or
        </Text>
      </Section>

      <Section>
        <TextInput label="Email" />
      </Section>

      <Section>
        <TextInput label="Password" secureTextEntry />
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
