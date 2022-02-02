import React  from 'react';
import {styles} from './Topic07Screen.style';
import { Screen, Header, Text} from '@components';

export const Topic07Screen = () => {
    return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Thunderstorm</Text>
        </Header>
      }>

    </Screen>
  );
};