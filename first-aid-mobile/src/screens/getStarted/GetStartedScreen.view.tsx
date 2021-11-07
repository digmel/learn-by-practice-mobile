import React, {FC} from 'react';
import {styles} from './GetStartedScreen.style';
import {TGetStartedScreenViewProps} from './GetStartedScreen.type';
import {Screen, Button, Section, Text, GetStartedScreenSvg} from '@components';
import {View} from 'react-native';

export const GetStartedScreenView: FC<TGetStartedScreenViewProps> = ({
  onPressGetStarted,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <View style={styles.svgContainer}>
        <GetStartedScreenSvg />
      </View>

      <View style={styles.textContainer}>
        <Text variation="H1_bold">Learn First Aid</Text>

        <Text variation="H1_light">It takes a second to save a life!</Text>
      </View>

      <Section containerStyle={styles.buttonContainer}>
        <Button text="Get Started" onPress={onPressGetStarted} />
      </Section>
    </Screen>
  );
};
