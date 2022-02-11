import React from 'react';
import {styles} from './Topic02Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {AsthmaSvg01, AsthmaSvg02} from '@svg';

export const Topic02Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Asthma Attacks</Text>
        </Header>
      }>
      <Section variation="headline">
        <Text variation="H1_bold">What is </Text>
        <Text variation="H1_light">an asthma attack?</Text>
      </Section>

      <Section>
        <AsthmaSvg01 />
      </Section>

      <Section>
        <Text>
          Asthma is a medical condition that affects the airways – tubes that
          carry air in and out of the lungs. If someone has an asthma attack,
          tubes are narrowed, making it difficult to breathe in and out.
        </Text>
      </Section>

      <Section>
        <Text variation="H1_bold">Risks & Symptoms</Text>
      </Section>

      <Section>
        <AsthmaSvg02 />
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">Signs of </Text>
        <Text variation="H1_light">EMERGENCY</Text>
      </Section>

      <Section>
        <List>Person finds it very difficult to breathe</List>
        <List>Unable to speak comfortably </List>
        <List>Their lips are turning blue</List>
        <List>Symptoms get worse very quickly</List>
        <List>Little or no relief from their inhaler</List>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">What to do </Text>
        <Text variation="H1_light">to help</Text>
      </Section>

      <Section>
        <Text>
          Help them to sit up and lean forward slightly as this may make it
          easier to breathe. Give the inhaler and encourage them to breathe
          slowly and deeply. If the attack becomes severe, or they don't have
          their inhaler, call for emergency.
        </Text>
      </Section>
    </Screen>
  );
};
