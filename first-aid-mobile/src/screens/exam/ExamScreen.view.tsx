import React, {FC} from 'react';
import {TExamScreenViewProps} from './ExamScreen.type';
import {styles} from './ExamScreen.style';
import {Section, Screen, Text, Header, List, Button} from '@components';

export const ExamScreenView: FC<TExamScreenViewProps> = () => {
  return (
    <Screen
      isScrollViewDisabled
      header={
        <Header hasBack>
          <Text>Knowledge Test</Text>
        </Header>
      }>
      <Section>
        <Text variation="body_bold">
          After finding an unresponsive child, your next course of action?
        </Text>
      </Section>

      <Section>
        <List>Leave the child and search for an AED</List>
        <List variation="correct">Begin back blows and chest thrusts</List>
        <List variation="wrong">Deliver 30 chest compressions</List>
        <List variation="empty">Deliver 100 chest compressions</List>
      </Section>

      <Section>
        <Section>
          <Button text="Previous" variation="secondary"></Button>
        </Section>

        <Section>
          <Button text="Next"></Button>
        </Section>
      </Section>
    </Screen>
  );
};
