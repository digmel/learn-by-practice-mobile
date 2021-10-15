import React, {FC} from 'react';
import {TExamScreenViewProps} from './ExamScreen.type';
import {styles} from './ExamScreen.style';
import {Section, Screen, Text, Header, Icon} from '@components';
import {View} from 'react-native';

export const ExamScreenView: FC<TExamScreenViewProps> = () => {
  return (
    <Screen
      containerStyle={styles.container}
      header={<Header hasMenu hasBack />}>
      <Section>
        <Text>EXAM</Text>
      </Section>

      <Section>
        <View style={styles.questionContainer}>
          <Text>Question something adasca asdcascd asdc?</Text>
        </View>
        <View style={styles.answerContainer}>
          <Icon name="apple" iconContainerStyle={{padding: 20}}></Icon>
          <Text>answer 1</Text>
        </View>
        <View style={styles.answerContainer}>
          <Icon name="apple" iconContainerStyle={{padding: 20}}></Icon>
          <Text>answer 1</Text>
        </View>
        <View style={styles.answerContainer}>
          <Icon name="apple" iconContainerStyle={{padding: 20}}></Icon>
          <Text>answer 1</Text>
        </View>
        <View style={styles.answerContainer}>
          <Icon name="apple" iconContainerStyle={{padding: 20}}></Icon>
          <Text>answer 1</Text>
        </View>
      </Section>
    </Screen>
  );
};
