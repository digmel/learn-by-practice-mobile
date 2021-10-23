import React, {FC} from 'react';
import {styles} from './AuthorizationScreen.style';
import {TAuthorizationScreenViewProps} from './AuthorizationScreen.type';
import {Screen, Button, Section, Text, color, size} from '@components';
import {View} from 'react-native';

export const AuthorizationScreenView: FC<TAuthorizationScreenViewProps> = ({
  onClickAuthorization,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <View style={styles.svgContainer}></View>

      <View style={styles.textContainer}>
        <Text variation="H1" fontWeight="extraBold">
          Learn how to act
        </Text>

        <Text variation="H4" fontWeight="light">
          When every second is important!
        </Text>
      </View>

      <Section containerStyle={styles.buttonContainer}>
        <Button text="Get Started" onPress={onClickAuthorization} />
      </Section>
    </Screen>
  );
};
