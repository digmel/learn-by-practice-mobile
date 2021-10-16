import React, {FC} from 'react';
import {TDashboardScreenViewProps} from './DashboardScreen.type';
import {styles} from './DashboardScreen.style';
import {
  Section,
  Screen,
  Text,
  Header,
  Card,
  CardSlider,
  Button,
  Icon,
  color,
  size,
} from '@components';
import {View} from 'react-native';

export const DashboardScreenView: FC<TDashboardScreenViewProps> = ({
  goToExam,
}) => {
  return (
    <Screen style={styles.container} header={<Header hasMenu />}>
      <Section>
        <View style={styles.banner}>
          <Text variation="H2" color={color.secondary800}>
            Check your knowledge
          </Text>

          <Icon name="logo" size={size.xxl} color={color.secondary800} />
          <Button variation="google" text="Start Test" onPress={goToExam} />
        </View>
      </Section>

      <Section>
        <CardSlider title="Learn">
          <Card title="Topic 1" />
          <Card title="Topic 2" />
          <Card title="Topic 3" />
          <Card title="Topic 4" />
          <Card title="Topic 5" />
          <Card title="Topic 6" />
        </CardSlider>
      </Section>
    </Screen>
  );
};
