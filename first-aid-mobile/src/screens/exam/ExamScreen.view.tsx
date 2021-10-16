import React, {FC} from 'react';
import {TExamScreenViewProps} from './ExamScreen.type';
import {styles} from './ExamScreen.style';
import {Section, Screen, Text, Header, Icon, size, color} from '@components';
import {View} from 'react-native';

export const ExamScreenView: FC<TExamScreenViewProps> = () => {
  return (
    <Screen
      containerStyle={styles.container}
      header={<Header hasMenu hasBack />}>
      <Section>
        <View style={styles.questionContainer}>
          <Text>Question something?</Text>
        </View>
        <View style={styles.answerContainer}>
          <Icon
            name="radio-unchecked"
            size={size.m}
            color={color.dark}
            iconContainerStyle={{paddingRight: 20}}></Icon>
          <Text>answer 1</Text>
        </View>
        <View style={styles.answerContainer}>
          <Icon
            name="radio-checked"
            color={color.success800}
            iconContainerStyle={{paddingRight: 20}}
            size={size.m}></Icon>
          <Text>answer 2</Text>
        </View>
        <View style={styles.answerContainer}>
          <Icon
            name="radio-unchecked"
            iconContainerStyle={{paddingRight: 20}}
            color={color.dark}
            size={size.m}></Icon>
          <Text>answer 3</Text>
        </View>
        <View style={styles.answerContainer}>
          <Icon
            name="radio-checked"
            iconContainerStyle={{paddingRight: 20}}
            color={color.error800}
            size={size.m}></Icon>
          <Text>answer 4</Text>
        </View>
      </Section>
    </Screen>
  );
};
