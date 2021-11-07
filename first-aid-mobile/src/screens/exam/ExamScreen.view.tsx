import React, {FC} from 'react';
import {TExamScreenViewProps} from './ExamScreen.type';
import {styles} from './ExamScreen.style';
import {Section, Screen, Text, Header, Answer} from '@components';

export const ExamScreenView: FC<TExamScreenViewProps> = () => {
  return (
    <Screen
      header={
        <Header hasMenu hasBack>
          <Text>Check your knowledge</Text>
        </Header>
      }>
      <Section>
        <Text>
          After finding an unresponsive child, your next course of action?
        </Text>
      </Section>

      <Section>
        <Answer
          answer="Leave the child and search for an AED"
          variation="regular"
        />
        <Answer answer="Begin back blows and chest thrusts" variation="wrong" />
        <Answer answer="Deliver 30 chest compressions" variation="correct" />
        <Answer answer="Deliver 100 chest compressions" />
      </Section>
    </Screen>
  );
};
