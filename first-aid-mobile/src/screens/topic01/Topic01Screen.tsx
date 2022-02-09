import React from 'react';
import {styles} from './Topic01Screen.style';
import {Screen, Header, Text, Section} from '@components';

export const Topic01Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Anaphylaxis</Text>
        </Header>
      }>
      <Section variation="headline">
        <Text variation="H1_bold">What is</Text>
        <Text variation="H1_bold"> </Text>
        <Text variation="H1_light">Anaphylaxis?</Text>
      </Section>
    </Screen>
  );
};
