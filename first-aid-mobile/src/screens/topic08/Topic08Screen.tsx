import React  from 'react';
import {styles} from './Topic08Screen.style';
import { Screen, Header, Text} from '@components';

export const Topic08Screen = () => {
    return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Flood</Text>
        </Header>
      }>

    </Screen>
  );
};