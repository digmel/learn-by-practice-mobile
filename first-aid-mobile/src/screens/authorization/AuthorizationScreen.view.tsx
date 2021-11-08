import React, {FC} from 'react';
import {styles} from './AuthorizationScreen.style';
import {TAuthorizationScreenViewProps} from './AuthorizationScreen.type';
import {Screen, Button, Section, Logo, Text, size, color} from '@components';

export const AuthorizationScreenView: FC<TAuthorizationScreenViewProps> = ({
  onPressFacebook,
  onPressGoogle,
  onPressEmail,
  onPressSignUp,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <Section containerStyle={styles.svgContainer} topSpace={size.xxl}>
        <Logo />
      </Section>

      <Section topSpace={size.xxl} bottomSpace={size.xxl}>
        <Text variation="H1_bold" textStyle={styles.text}>
          Learn First Aid
        </Text>
      </Section>

      <Section bottomSpace={size.l}>
        <Button
          text="Log in with Facebook"
          variation="facebook"
          iconLeft="facebook"
          onPress={onPressFacebook}
        />
      </Section>

      <Section bottomSpace={size.l}>
        <Button
          text="Log in with Google"
          variation="google"
          iconLeft="google"
          onPress={onPressGoogle}
        />
      </Section>

      <Section>
        <Button
          text="Log in with Email"
          variation="email"
          iconLeft="email"
          onPress={onPressEmail}
        />
      </Section>

      <Section topSpace={size.xxl} bottomSpace={size.xxl}>
        <Text variation="body_bold" textStyle={styles.text}>
          Or
        </Text>
      </Section>

      <Section>
        <Button text="Sign Up" variation="secondary" onPress={onPressSignUp} />
      </Section>
    </Screen>
  );
};
