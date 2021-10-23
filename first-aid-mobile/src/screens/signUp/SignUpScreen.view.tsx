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
  size,
} from '@components';

export const SignUpScreenView: FC<TSignUpScreenViewProps> = ({}) => {
  return (
    <Screen isScrollViewDisabled header={<Header hasBack />}>
      <Section topSpace={size.xl} bottomSpace={size.xxl}>
        <Text variation="H1" fontWeight="extraBold" textStyle={styles.text}>
          Welcome
        </Text>
      </Section>

      <Section bottomSpace={size.xl}>
        <TextInput label="First Name" />
      </Section>

      <Section bottomSpace={size.xl}>
        <TextInput label="Last Name" />
      </Section>

      <Section bottomSpace={size.xl}>
        <TextInput label="Email" />
      </Section>

      <Section bottomSpace={size.xl}>
        <TextInput label="Password" secureTextEntry />
      </Section>

      <Section bottomSpace={size.xxl}>
        <TextInput label="Confirm Password" secureTextEntry />
      </Section>

      <Section>
        <Button text="Create Account" />
      </Section>
    </Screen>
  );
};
