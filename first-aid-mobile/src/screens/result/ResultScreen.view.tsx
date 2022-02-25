import React, {FC} from 'react';
import {styles} from './ResultScreen.style';
import {TResultScreenViewProps} from './ResultScreen.type';
import {Screen, Button, Section, Text, size} from '@components';
import {View} from 'react-native';

export const ResultScreenView: FC<TResultScreenViewProps> = ({
  onPressHomepage,
  onPressTryAgain,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <View style={styles.textContainer}>
        <Section topSpace={size.xxl} bottomSpace={size.xl} isCentered>
          <Text variation="H1_bold">Congratulations!</Text>
        </Section>

        <Section isCentered>
          <Text>
            Thank you for your time, try again with different questions to learn
            more!
          </Text>
        </Section>
      </View>

      <View style={styles.buttonContainer}>
        <Section>
          <Button text="Homepage" onPress={onPressHomepage} />
        </Section>

        <Section>
          <Button
            text="Try Again"
            variation="secondary"
            onPress={onPressTryAgain}
          />
        </Section>
      </View>
    </Screen>
  );
};
