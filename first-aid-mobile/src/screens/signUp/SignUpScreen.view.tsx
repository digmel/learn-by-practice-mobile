import React, {FC} from 'react';
import {styles} from './SignUpScreen.style';
import {TSignUpScreenViewProps} from './SignUpScreen.type';
import {View} from 'react-native';
import {Section, Button, Screen, TextInput, Header, Text} from '@components';

export const SignUpScreenView: FC<TSignUpScreenViewProps> = ({}) => {
  return (
    <Screen
      isScrollViewDisabled
      header={
        <Header hasBack>
          <Text>header</Text>
        </Header>
      }>
      <View style={styles.container}>
        <Section>
          <TextInput label="Email" />
        </Section>

        <Section>
          <TextInput label="Password" secureTextEntry />
        </Section>

        <Section>
          <Button variation="login" text="Sign Up" iconLeft="email" />
        </Section>
      </View>
    </Screen>
  );
};
