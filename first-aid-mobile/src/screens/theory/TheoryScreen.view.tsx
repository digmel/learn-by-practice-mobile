import React, {FC} from 'react';
import {TTheoryScreenViewProps} from './TheoryScreen.type';
import {styles} from './TheoryScreen.style';
import {Section, Screen, Header, Text} from '@components';
import {TheoryData} from '@data';

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
      {TheoryData.map(({title, description, SVG}) => {
        return (
          <Section>
            <Text variation="H2_bold">{title}</Text>
            <Text>{description}</Text>
            {SVG && <SVG />}
          </Section>
        );
      })}
    </Screen>
  );
};
