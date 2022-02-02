import React  from 'react';
import {styles} from './Topic10Screen.style';
import { Screen, Header, Text} from '@components';

export const Topic10Screen = () => {
    return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Forest Fire</Text>
        </Header>
      }>

    </Screen>
  );
};