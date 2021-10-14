import React, {FC} from 'react';
import {TDashboardScreenViewProps} from './DashboardScreen.type';
import {styles} from './DashboardScreen.style';
import {Section, Screen, Text, Header} from '@components';

export const DashboardScreenView: FC<TDashboardScreenViewProps> = () => {
  return (
    <Screen
      containerStyle={styles.container}
      header={
        <Header hasMenu>
          <Text>header</Text>
        </Header>
      }>
      <Section containerStyle={styles.banner}>
        <Text variation="H2">Welcome</Text>
      </Section>
    </Screen>
  );
};
