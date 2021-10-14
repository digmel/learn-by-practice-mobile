import React, {FC} from 'react';
import {TDashboardScreenViewProps} from './DashboardScreen.type';
import {styles} from './DashboardScreen.style';
import {Section, Screen, Text, Button} from '@components';

export const DashboardScreenView: FC<TDashboardScreenViewProps> = () => {
  return (
    <Screen containerStyle={styles.container}>
      <Section containerStyle={styles.banner}>
        <Text variation="H2">Welcome</Text>
      </Section>
    </Screen>
  );
};
