import React, {FC} from 'react';
import {styles} from './LoginScreen.style';
import {TLoginScreenViewProps} from './LoginScreen.type';
import {View} from 'react-native';
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
          <Button
            variation="tertiary"
            text="Reset Password"
            onPress={goToResetPasswordScreen}></Button>
        </Section>

        <Section>
          <Button
            variation="login"
            text="Login with Email"
            iconLeft="email"
            iconContainerStyle={styles.iconContainer}
            textContainerStyle={styles.textContainer}
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
          <Button text="Continue with Google" variation="secondary" />
        </Section>
      </View>
    </Screen>
  );
};
