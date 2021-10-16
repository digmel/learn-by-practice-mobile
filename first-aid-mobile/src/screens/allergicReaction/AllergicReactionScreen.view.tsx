import React, {FC} from 'react';
import {TAllergicReactionScreenViewProps} from './AllergicReactionScreen.type';
import {styles} from './AllergicReactionScreen.style';
import {Section, Screen, Header, Text, color} from '@components';

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
      </Screen>
    );
  };
