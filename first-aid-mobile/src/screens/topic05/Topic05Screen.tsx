import React from 'react';
import {styles} from './Topic05Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {FracturesSvg01, FracturesSvg02} from '@svg';

export const Topic05Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Fractures</Text>
        </Header>
      }>
      <Section variation="headline">
        <Text variation="H1_bold">What is </Text>
        <Text variation="H1_light">fractures?</Text>
      </Section>

      <Section>
        <FracturesSvg01 />
      </Section>

      <Section>
        <Text>
          A break or crack in a bone is called a fracture. In the case of an
          open fracture, the broken bone may pierce the skin. But in a closed
          fracture, broken bones may be unstable causing internal bleeding and
          the casualty may develop shock.
        </Text>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">Symptoms </Text>
        <Text variation="H1_light">of fractures</Text>
      </Section>

      <Section>
        <List>Deformity, swelling, and bruising</List>
        <List>Pain or difficulty moving the area</List>
        <List>A limb may look shorter, twisted, bent</List>
        <List>Difficulty to move the limb normally</List>
        <List>A wound where the bone sticking out</List>
      </Section>

      <Section>
        <FracturesSvg02 />
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">What to do </Text>
        <Text variation="H1_light">to help</Text>
      </Section>

      <Section>
        <Text>
          If it is an open fracture, cover the wound with a sterile dressing or
          clean non-fluffy clothes. Apply pressure around a wound and not over
          the protruding bone, to control any bleeding.Then secure the dressing
          with a bandage. After that call for emergency help. Don’t move the
          casualty until the injured part is secured.
        </Text>
      </Section>
    </Screen>
  );
};
