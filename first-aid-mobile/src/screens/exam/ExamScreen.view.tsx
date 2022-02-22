import React, {FC, useState} from 'react';
import {TExamScreenViewProps} from './ExamScreen.type';
import {styles} from './ExamScreen.style';
import {Section, Screen, Text, Header, List, Button, color} from '@components';
import {View} from 'react-native';

export const ExamScreenView: FC<TExamScreenViewProps> = ({
  onPressNext,
  onPressPrevious,
  onPressA,
  progressBar,
  showDetails,
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
          <List variation="empty" onPress={onPressA}>
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

      <Section isFullWidth contentStyle={styles.detailsSection}>
        {showDetails && (
          <View style={styles.detailsView}>
            <View style={styles.headline}>
              <Text variation="body_bold" color={color.error}>
                Wrong
              </Text>
            </View>

            <View style={styles.details}>
              <Text variation="subtitle">
                Applying pressure is one of the best ways to stop or slow down
                the bleeding. if it is bad enough, call for emergency, but the
                primary first aid concern is to slow down the bleeding.
              </Text>
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
