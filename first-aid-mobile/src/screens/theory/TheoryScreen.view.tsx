import React, {FC} from 'react';
import {TTheoryScreenViewProps} from './TheoryScreen.type';
import {styles} from './TheoryScreen.style';
import {Section, Screen, Header, Text, color, size} from '@components';

const data = [
  {
    title: 'What is Anaphylaxis?',
    description:
      'Anaphylaxis, also called anaphylactic shock, is a severe allergic reaction that makes it difficult for a person to breathe. Someone at risk of anaphylactic shock should always have an auto-injector. It contains medication that helps to ease the symptoms in an emergency.',
  },

  {
    title: 'Symptoms of Anaphylaxis',
    description: 'Difficult or noisy breathing',
  },

  {
    title: 'What to do to help',
    description:
      'When person is having a severe allergic reaction help them use an auto-injector if they have some. Lay the person flat, don’t stand, and call an ambulance. Make them as comfortable as possible while you wait for the ambulance.',
  },
];

export const TheoryScreenView: FC<TTheoryScreenViewProps> = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Allergic Reaction</Text>
        </Header>
      }>
      {data.map(({title, description}) => {
        return (
          <Section>
            <Text variation="H2_bold">{title}</Text>
            <Text>{description}</Text>
          </Section>
        );
      })}
    </Screen>
  );
};
