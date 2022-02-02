import React  from 'react';
import {styles} from './Topic09Screen.style';
import { Screen, Header, Text} from '@components';

export const Topic09Screen = () => {
    return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Hurricanes</Text>
        </Header>
      }>

    </Screen>
  );
};