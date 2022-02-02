import React  from 'react';
import {styles} from './Topic05Screen.style';
import { Screen, Header, Text} from '@components';

export const Topic05Screen = () => {
    return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Fractures</Text>
        </Header>
      }>

    </Screen>
  );
};