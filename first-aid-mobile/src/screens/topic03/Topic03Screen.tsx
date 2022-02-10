import React from 'react';
import {styles} from './Topic03Screen.style';
import {Screen, Header, Text, Section, List} from '@components';

export const Topic03Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Heart Attack</Text>
        </Header>
      }>
      <Section variation="headline">
        <Text variation="H1_bold">What is a </Text>
        <Text variation="H1_light">heart attack?</Text>
      </Section>

      <Section>
        <Text>
          A heart attack happens when the supply of blood to part of the heart
          is suddenly blocked, usually by a blood clot.
        </Text>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">Symptoms </Text>
        <Text variation="H1_light">of a heart attack</Text>
      </Section>

      <Section>
        <List>Crushing pain in the center of a chest</List>
        <List>Pain spread to the jaw and arms</List>
        <List>Be breathless or gasping for breath</List>
        <List>Be sweating profusely</List>
        <List>Experience pain similar to indigestion</List>
        <List>Have pale skin and blue lips</List>
        <List>Have a rapid, weak, or irregular pulse</List>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">What to do </Text>
        <Text variation="H1_light">to help</Text>
      </Section>

      <Section>
        <List>Call for emergency.</List>
        <List>
          Help move them into a comfortable position. The best position is on
          the floor, with their knees bent and their head and shoulders
          supported. You could place cushions behind them or under their knees.
        </List>
        <List>
          Give them one 1 aspirin tablet if they aren’t allergic to it and ask
          to chew it.
        </List>
        <List>Give their angina medication.</List>
        <List>
          Keep monitoring the level of response. If they become unresponsive
          start CPR.
        </List>
      </Section>
    </Screen>
  );
};
