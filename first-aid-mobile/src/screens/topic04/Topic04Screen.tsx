import React from 'react';
import {styles} from './Topic04Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {DiabetesSvg01, DiabetesSvg02, DiabetesSvg03, DiabetesSvg04} from '@svg';

export const Topic04Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Diabetes</Text>
        </Header>
      }>
      <Section variation="headline">
        <Text variation="H1_bold">What is </Text>
        <Text variation="H1_light">diabetes?</Text>
      </Section>

      <Section>
        <Text>
          Diabetes is a medical condition where the body can’t produce enough
          insulin.
        </Text>
      </Section>

      <Section variation="svg">
        <DiabetesSvg01 />
      </Section>

      <Section>
        <Text variation="H1_bold">Causes of high sugar level</Text>
      </Section>

      <Section>
        <Text>
          Hyperglycemia is the medical term for a high blood sugar level. Causes
          can be if a person hasn't taken medication, or eaten too much sugary
          or starchy food.
        </Text>
      </Section>

      <Section>
        <Text variation="H1_bold">Symptoms of High Sugar Level</Text>
      </Section>

      <Section variation="svg">
        <DiabetesSvg02 />
      </Section>

      <Section>
        <List>Warm and/or dry skin</List>
        <List>Rapid pulse and breathing</List>
        <List>Fruity, sweet breath, excessive thirst</List>
        <List>Drowsiness, become unresponsive</List>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">High Sugar Level Emergency</Text>
      </Section>

      <Section>
        <Text>
          Call for emergency and keep checking their breathing, pulse. If they
          become unresponsive, open their airway, check their breathing and
          prepare to start CPR.
        </Text>
      </Section>

      <Section variation="svg">
        <DiabetesSvg03 />
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">Causes of Low Sugar Level</Text>
      </Section>

      <Section>
        <Text>
          Hypoglycaemia is the medical term for a low blood sugar level. It can
          be caused if a person take too much medication or insulin. Also,
          alcohol, skipping a meal or physical activity could be reasons.
        </Text>
      </Section>

      <Section>
        <Text variation="H1_bold">Symptoms of Low Sugar Level</Text>
      </Section>

      <Section variation="svg">
        <DiabetesSvg04 />
      </Section>

      <Section>
        <List>Weakness, faintness or hunger</List>
        <List>Confusion and irrational behavior</List>
        <List>Sweating with cold, clammy skin</List>
        <List>Rapid pulse, palpitations, trembling</List>
        <List>Deteriorating level of response</List>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">Low Sugar Level Emergency</Text>
      </Section>

      <Section>
        <Text>
          If they do not have their own glucose gel, give them something sugary,
          like juice. Don’t give something to eat or drink, if they aren’t fully
          alert. Check their blood sugar level and call an ambulance. If they
          are unresponsive open the airway, check breathing, give CPR.
        </Text>
      </Section>
    </Screen>
  );
};
