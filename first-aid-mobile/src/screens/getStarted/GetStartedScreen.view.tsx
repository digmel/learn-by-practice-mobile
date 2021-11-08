import React, {FC} from 'react';
import {styles} from './GetStartedScreen.style';
import {TGetStartedScreenViewProps} from './GetStartedScreen.type';
import {
  Screen,
  Button,
  Section,
  Text,
  GetStartedScreenSvg,
  size,
} from '@components';

export const GetStartedScreenView: FC<TGetStartedScreenViewProps> = ({
  onPressGetStarted,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <Section containerStyle={styles.svgContainer}>
        <GetStartedScreenSvg />
      </Section>

      <Section topSpace={size.xxl} bottomSpace={size.xxl}>
        <Text variation="H1_bold">Learn First Aid</Text>

        <Text variation="H2_light">It takes a second to save a life!</Text>
      </Section>

      <Section>
        <Button text="Get Started" onPress={onPressGetStarted} />
      </Section>
    </Screen>
  );
};
