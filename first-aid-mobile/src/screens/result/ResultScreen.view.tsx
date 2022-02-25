import React, {FC} from 'react';
import {styles} from './ResultScreen.style';
import {TResultScreenViewProps} from './ResultScreen.type';
import {Screen, Button, Section, Text, size} from '@components';

export const ResultScreenView: FC<TResultScreenViewProps> = ({
  onPressHomepage,
  onPressTryAgain,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <Section topSpace={size.xxl} bottomSpace={size.xl} isCentered>
        <Text variation="H1_bold">Congratulations!</Text>
      </Section>

      <Section isCentered>
        <Text>
          Thank you for your time, try again with different questions to learn
          more!
        </Text>
      </Section>

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
    </Screen>
  );
};
