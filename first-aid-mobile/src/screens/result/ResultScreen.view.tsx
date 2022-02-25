import React, {FC} from 'react';
import {styles} from './ResultScreen.style';
import {TResultScreenViewProps} from './ResultScreen.type';
import CircularProgress from 'react-native-circular-progress-indicator';
import {Screen, Button, Section, Text, size, color} from '@components';
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

        <Section isCentered bottomSpace={size.xl}>
          <CircularProgress
            value={6}
            radius={100}
            duration={2000}
            textColor={color.primary}
            maxValue={12}
            title={'%'}
            titleColor={color.primary}
          />
        </Section>

        <Section isCentered>
          <Text textStyle={{textAlign: 'center'}}>
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
