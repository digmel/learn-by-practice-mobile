import React from 'react';
import {styles} from './Topic10Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {ForestFireSvg01, ForestFireSvg02} from '@svg';

export const Topic10Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Forest Fire</Text>
        </Header>
      }>
      <Section>
        <Text variation="H1_bold">Always</Text>
      </Section>

      <Section>
        <Text>
          Clear the area near your house of any dried-out branches, leaves, and
          debris, If you live near a forested area .
        </Text>
      </Section>

      <Section>
        <ForestFireSvg01 />
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">During </Text>
        <Text variation="H1_light">Forest Fire</Text>
      </Section>

      <Section>
        <List>Be prepared to evacuate at any time</List>
        <List>Close windows to reduce smoke </List>
        <List>Move combustible away from a house</List>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">After </Text>
        <Text variation="H1_light">Forest Fire</Text>
      </Section>

      <Section>
        <ForestFireSvg02 />
      </Section>

      <Section>
        <Text>
          Make sure that food and water may be contaminated. Carefully enter
          burned areas, there may still be hazards, such as hot spots, which can
          flare. Remember, always wear protective gear while checking the
          damage.
        </Text>
      </Section>
    </Screen>
  );
};
