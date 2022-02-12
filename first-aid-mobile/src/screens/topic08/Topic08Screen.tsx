import React from 'react';
import {styles} from './Topic08Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {FloodSvg01, FloodSvg02, FloodSvg03} from '@svg';

export const Topic08Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Flood</Text>
        </Header>
      }>
      <Section>
        <Text variation="H1_bold">Always</Text>
      </Section>

      <Section>
        <FloodSvg01 />
      </Section>

      <Section>
        <Text>
          Avoid driving through areas that are subject to flooding. Never
          attempt to drive over a flooded road. The depth of water isn’t always
          obvious. Most flood-related deaths occur while driving.
        </Text>
      </Section>

      <Section>
        <Text variation="H1_bold">Inside The Building</Text>
      </Section>

      <Section>
        <FloodSvg02 />
      </Section>

      <Section>
        <Text>
          If the water starts to rise inside a house before you have evacuated,
          retreat to the second floor and the attic. Look for fire hazards. Fire
          is the most frequent hazard following floods. Keep the powers off
          until to safety.
        </Text>
      </Section>

      <Section>
        <Text variation="H1_bold">Outside The Building</Text>
      </Section>

      <Section>
        <FloodSvg03 />
      </Section>

      <Section>
        <List>Climb to higher ground</List>
        <List>Abstain from movement at night</List>
        <List>Avoid walking through flooded areas</List>
        <List>Watch out for downed power lines</List>
      </Section>

      <Section>
        <Text variation="H1_bold">Stay in a safe shelter!</Text>
      </Section>

      <Section>
        <Text>
          Be careful walking around. After a flood, steps and floors are often
          slippery with mud and covered with debris, including nails and broken
          glass.
        </Text>
      </Section>
    </Screen>
  );
};
