import React, {FC} from 'react';
import {TAllergicReactionScreenViewProps} from './AllergicReactionScreen.type';
import {styles} from './AllergicReactionScreen.style';
import {Section, Screen, Header, Text, color, size} from '@components';
import {Image, View} from 'react-native';

export const AllergicReactionScreenView: FC<TAllergicReactionScreenViewProps> =
  ({}) => {
    return (
      <Screen
        style={styles.container}
        header={
          <Header hasMenu hasBack>
            <Text variation="subtitle">Allergic Reaction</Text>
          </Header>
        }>
        <Section>
          <Text variation="H1" fontWeight="bold">
            Symptoms
          </Text>
        </Section>

        <Section containerStyle={styles.imageContainer}>
          <Image
            source={require('assets/images/allergic-symptoms.png')}
            resizeMode="center"
          />
        </Section>

        <Section variation="primary">
          <Text>- Difficult or noisy breathing</Text>
          <Text>- Swelling of the tongue</Text>
          <Text>- Swelling or tightness of the throat</Text>
          <Text>- Difficulty talking or a hoarse voice</Text>
          <Text>- Wheeze or persistent cough</Text>
          <Text>- Persistent dizziness or collapse</Text>
          <Text>- Paleness and floppiness in young children</Text>
          <Text>- Abdominal pain and vomiting</Text>
        </Section>

        <Section containerStyle={styles.imageContainer}>
          <Image
            source={require('assets/images/allergic-symptoms2.png')}
            resizeMode="center"
          />
        </Section>

        <Section>
          <Text>
            Milder Allergic Symptoms that can appear before a severe allergic
            reaction:
          </Text>
        </Section>

        <Section variation="secondary">
          <Text>- Swelling of your lips, face and eyes</Text>
          <Text>- Hives or welts</Text>
          <Text>- Tingling mouth</Text>
          <Text>- Abdominal pain and vomiting</Text>
        </Section>
      </Screen>
    );
  };
