import React, {FC} from 'react';
import {TExamScreenViewProps} from './ExamScreen.type';
import {styles} from './ExamScreen.style';
import {Section, Screen, Text, Header, List, Button} from '@components';
import {View} from 'react-native';

export const ExamScreenView: FC<TExamScreenViewProps> = () => {
  return (
    <Screen
      isScrollViewDisabled
      header={
        <Header hasBack>
          <Text>Knowledge Test</Text>
        </Header>
      }>
      <View>
        <Section>
          <Text variation="body_bold">
            After finding an unresponsive child, your next course of action?
          </Text>
        </Section>

        <Section>
          <List variation="empty" onPress={() => {}}>
            Leave the child and search for an AED
          </List>
        </Section>

        <Section>
          <List variation="correct" onPress={() => {}}>
            Begin back blows and chest thrusts
          </List>
        </Section>

        <Section>
          <List variation="wrong" onPress={() => {}}>
            Deliver 30 chest compressions
          </List>
        </Section>

        <Section>
          <List variation="empty" onPress={() => {}}>
            Deliver 100 chest compressions
          </List>
        </Section>
      </View>

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
