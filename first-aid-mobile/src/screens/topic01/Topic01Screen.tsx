import React from 'react';
import {styles} from './Topic01Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {View} from 'react-native';

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
        <Text variation="H1_bold">What is </Text>
        <Text variation="H1_light">Anaphylaxis?</Text>
      </Section>

      <Section>
        <Text>
          Anaphylaxis, also called anaphylactic shock, is a severe allergic
          reaction that makes it difficult for a person to breathe. Someone at
          risk of anaphylactic shock should always have an auto-injector. It
          contains medication that helps to ease the symptoms in an emergency.
        </Text>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">Symptoms </Text>
        <Text variation="H1_light">Of Anaphylaxis</Text>
      </Section>

      <Section>
        <List text="Difficult or noisy breathing" />
        <List text="Swelling or tightness of the throat" />
        <List text="Wheeze or persistent cough" />
        <List text="Persistent dizziness or collapse" />
        <List text="Paleness and floppiness in children" />
        <List text="Abdominal pain and vomiting" />
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">How to </Text>
        <Text variation="H1_light">Recognize</Text>
      </Section>

      <Section>
        <List text="A weak and rapid pulse" />
        <List text="Nausea, vomiting, or diarrhea" />
        <List text="Dizziness or fainting" />
        <List text="Low blood pressure (hypotension)" />
        <List text="Swelling of your lips, face, and eyes" />
        <List text="Hives or welts. Tingling mouth" />
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">What to do </Text>
        <Text variation="H1_light">to help</Text>
      </Section>

      <Section>
        <Text>
          When person is having a severe allergic reaction help them use an
          auto-injector if they have some. Lay the person flat, don’t stand, and
          call an ambulance. Make them as comfortable as possible while you wait
          for the ambulance.
        </Text>
        <Text>
          If you are at risk of a severe allergic reaction, make sure you always
          have a: Mobile phone, Action plan, EpiPen®
        </Text>
        <Text>
          Wear medical identification jewelry this increases the likelihood that
          adrenaline will be administered in an emergency
        </Text>
      </Section>

      <View style={{height: 200}}></View>
    </Screen>
  );
};
