import React, {FC} from 'react';
import {TAllergicReactionScreenViewProps} from './AllergicReactionScreen.type';
import {styles} from './AllergicReactionScreen.style';
import {Section, Screen, Header, Text} from '@components';

export const AllergicReactionScreenView: FC<TAllergicReactionScreenViewProps> =
  ({}) => {
    return (
      <Screen style={styles.container} header={<Header hasMenu />}>
        <Section>
          <Text>Hello</Text>
        </Section>
      </Screen>
    );
  };
