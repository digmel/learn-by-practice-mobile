import React, {FC} from 'react';
import {styles} from './LoginScreen.style';
import {TLoginScreenViewProps} from './LoginScreen.type';
import {Platform} from 'react-native';
import {Section, Button, Text, Screen, color, size} from '@components';

export const LoginScreenView: FC<TLoginScreenViewProps> = ({}) => {
  return (
    <Screen isScrollViewDisabled>
      <Section>
        <Button
          variation="google"
          iconLeft="google"
          text="Continue with Google"
          iconContainerStyle={styles.iconContainer}
          textContainerStyle={styles.textContainer}
        />
      </Section>

      <Section>
        <Button
          variation="facebook"
          iconLeft="facebook"
          text="Continue with Facebook"
          iconContainerStyle={styles.iconContainer}
          textContainerStyle={styles.textContainer}
        />
      </Section>

      {Platform.OS === 'ios' && (
        <Section>
          <Button
            variation="apple"
            iconLeft="apple"
            text="Continue with Apple ID"
            iconContainerStyle={styles.iconContainer}
            textContainerStyle={styles.textContainer}
          />
        </Section>
      )}

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
        <Button text="Sign Up" variation="secondary" />
      </Section>
    </Screen>
  );
};
