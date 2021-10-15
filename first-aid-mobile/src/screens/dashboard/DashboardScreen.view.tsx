import React, {FC} from 'react';
import {TDashboardScreenViewProps} from './DashboardScreen.type';
import {styles} from './DashboardScreen.style';
import {Section, Screen, Text, Header, Card, CardSlider} from '@components';

export const DashboardScreenView: FC<TDashboardScreenViewProps> = ({
  goToExam,
}) => {
  return (
    <Screen containerStyle={styles.container} header={<Header hasMenu />}>
      <Section>
        <CardSlider title="Test">
          <Card title="Easy" onPress={goToExam} />
          <Card title="Medium" />
          <Card title="Hard" />
        </CardSlider>
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
