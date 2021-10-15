import React, {FC} from 'react';
import {styles} from './SignUpScreen.style';
import {TSignUpScreenViewProps} from './SignUpScreen.type';
import {
  Section,
  Button,
  Screen,
  TextInput,
  Header,
  Text,
  color,
  size,
} from '@components';

export const SignUpScreenView: FC<TSignUpScreenViewProps> = ({}) => {
  return (
    <Screen isScrollViewDisabled header={<Header hasBack />}>
      <Section>
        <TextInput label="First Name" />
      </Section>

      <Section>
        <TextInput label="Last Name" />
      </Section>

      <Section>
        <TextInput label="Email" />
      </Section>

      <Section>
        <TextInput label="Password" secureTextEntry />
      </Section>

      <Section>
        <TextInput label="Confirm Password" secureTextEntry />
      </Section>

      <Section topSpace={size.xl}>
        <Button text="Create Account" />
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
    </Screen>
  );
};
