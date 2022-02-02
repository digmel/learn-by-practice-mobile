import React  from 'react';
import {styles} from './Topic04Screen.style';
import { Screen, Header, Text} from '@components';

export const Topic04Screen = () => {
    return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Dieabetes</Text>
        </Header>
      }>

    </Screen>
  );
};