import React, {FC} from 'react';
import {TExamScreenViewProps} from './ExamScreen.type';
import {styles} from './ExamScreen.style';
import {Section, Screen, Text, Header, Card, CardSlider} from '@components';

export const ExamScreenView: FC<TExamScreenViewProps> = () => {
  return (
    <Screen
      containerStyle={styles.container}
      header={<Header hasMenu hasBack />}>
      <Section>
        <Text>EXAM</Text>
      </Section>
    </Screen>
  );
};
