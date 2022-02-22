import React, {FC, useState} from 'react';
import {TExamScreenViewProps} from './ExamScreen.type';
import {styles} from './ExamScreen.style';
import {Section, Screen, Text, Header, List, Button, color} from '@components';
import {View} from 'react-native';

export const ExamScreenView: FC<TExamScreenViewProps> = ({
  onPressNext,
  onPressPrevious,
  onPressA,
  onPressB,
  onPressC,
  onPressD,
  progressBar,
  showDetails,
  showAnswer,
  examData,
}) => {
  return (
    <Screen
      isScrollViewDisabled
      contentStyle={styles.content}
      header={
        <Header hasBack>
          <Text>Knowledge Test</Text>
        </Header>
      }>
      <View style={styles.testView}>
        <Section>
          <Text variation="body_bold">{examData.question}</Text>
        </Section>

        <Section>
          <List variation={showAnswer} onPress={onPressA}>
            {examData.A}
          </List>
        </Section>

        <Section>
          <List variation={showAnswer} onPress={onPressB}>
            {examData.B}
          </List>
        </Section>

        <Section>
          <List variation={showAnswer} onPress={onPressC}>
            {examData.C}
          </List>
        </Section>

        <Section>
          <List variation={showAnswer} onPress={onPressD}>
            {examData.D}
          </List>
        </Section>
      </View>

      <Section isFullWidth contentStyle={styles.detailsSection}>
        {showDetails && (
          <View style={styles.detailsView}>
            <View style={styles.headline}>
              <Text variation="body_bold" color={color.error}>
                Wrong
              </Text>
            </View>

            <View style={styles.details}>
              <Text variation="subtitle">{examData.details}</Text>
            </View>
          </View>
        )}
      </Section>

      <Section isCentered>
        <View style={styles.progressBar}>
          <View style={{flexDirection: 'row'}}>{progressBar}</View>
        </View>
      </Section>

      <View style={styles.navigation}>
        <View style={styles.buttonContainer}>
          <Button
            text="Previous"
            variation="secondary"
            onPress={onPressPrevious}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Next" onPress={onPressNext} />
        </View>
      </View>
    </Screen>
  );
};
