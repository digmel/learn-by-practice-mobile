import React, {FC} from 'react';
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
  AnswerA,
  AnswerB,
  AnswerC,
  AnswerD,
  AnswerStatus,
  progressBar,
  showDetails,
  examData,
  isPreviousButtonDisabled,
  isNextButtonDisabled,
  isTestButtonDisabled,
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
          <List
            variation={AnswerA}
            onPress={onPressA}
            isDisabled={isTestButtonDisabled}>
            {examData.A}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerB}
            onPress={onPressB}
            isDisabled={isTestButtonDisabled}>
            {examData.B}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerC}
            onPress={onPressC}
            isDisabled={isTestButtonDisabled}>
            {examData.C}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerD}
            onPress={onPressD}
            isDisabled={isTestButtonDisabled}>
            {examData.D}
          </List>
        </Section>
      </View>

      <Section isFullWidth contentStyle={styles.detailsSection}>
        {showDetails && (
          <View style={styles.detailsView}>
            <View style={styles.headline}>
              <Text
                variation="body_bold"
                color={AnswerStatus === 'Wrong' ? color.error : color.success}>
                {AnswerStatus}
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
            isDisabled={isPreviousButtonDisabled}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Next"
            onPress={onPressNext}
            isDisabled={isNextButtonDisabled}
          />
        </View>
      </View>
    </Screen>
  );
};
