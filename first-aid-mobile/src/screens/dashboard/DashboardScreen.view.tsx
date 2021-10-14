import React, {FC} from 'react';
import {TDashboardScreenViewProps} from './DashboardScreen.type';
import {styles} from './DashboardScreen.style';
import {Section, Screen, Text, Header, Card, CardSlider} from '@components';

export const DashboardScreenView: FC<TDashboardScreenViewProps> = () => {
  return (
    <Screen containerStyle={styles.container} header={<Header hasMenu />}>
      <Section>
        <CardSlider title="Test">
          <Card>
            <Text>1</Text>
          </Card>
          <Card>
            <Text>2</Text>
          </Card>
          <Card>
            <Text>3</Text>
          </Card>
        </CardSlider>
      </Section>

      <Section>
        <CardSlider title="Learn">
          <Card>
            <Text>1</Text>
          </Card>
          <Card>
            <Text>2</Text>
          </Card>
          <Card>
            <Text>3</Text>
          </Card>
        </CardSlider>
      </Section>
    </Screen>
  );
};
