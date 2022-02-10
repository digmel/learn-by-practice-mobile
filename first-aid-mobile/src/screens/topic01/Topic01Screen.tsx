import React from 'react';
import {styles} from './Topic01Screen.style';
import {Screen, Header, Text, Section, Icon, size, color} from '@components';
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
        <Text>{'\u25CF'} Difficult or noisy breathing</Text>
        <Text>{'\u25CF'} Swelling or tightness of the throat</Text>
        <Text>{'\u25CF'} Wheeze or persistent cough</Text>
        <Text>{'\u25CF'} Persistent dizziness or collapse</Text>
        <Text>{'\u25CF'} Paleness and floppiness in children</Text>
        <Text>{'\u25CF'} Abdominal pain and vomiting</Text>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">How to </Text>
        <Text variation="H1_light">Recognize</Text>
      </Section>

      <Section>
        <Text>{'\u25CF'} A weak and rapid pulse</Text>
        <Text>{'\u25CF'} Nausea, vomiting, or diarrhea</Text>
        <Text>{'\u25CF'} Dizziness or fainting</Text>
        <Text>{'\u25CF'} Low blood pressure (hypotension)</Text>
        <Text>{'\u25CF'} Swelling of your lips, face, and eyes</Text>
        <Text>{'\u25CF'} Hives or welts. Tingling mouth</Text>
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
