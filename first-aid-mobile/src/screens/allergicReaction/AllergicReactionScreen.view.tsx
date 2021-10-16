import React, {FC} from 'react';
import {TAllergicReactionScreenViewProps} from './AllergicReactionScreen.type';
import {styles} from './AllergicReactionScreen.style';
import {Section, Screen, Header, Text, color} from '@components';
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

        <Section isFullWidth>
          <View style={styles.listSectionContainer}>
            <View style={styles.listContainer}>
              <Text>- Difficult or noisy breathing</Text>
              <Text>- Swelling of the tongue</Text>
              <Text>- Swelling or tightness of the throat</Text>
              <Text>- Difficulty talking or a hoarse voice</Text>
              <Text>- Wheeze or persistent cough</Text>
              <Text>- Persistent dizziness or collapse</Text>
              <Text>- Paleness and floppiness in young children</Text>
              <Text>- Abdominal pain and vomiting</Text>
            </View>
          </View>
        </Section>
      </Screen>
    );
  };
