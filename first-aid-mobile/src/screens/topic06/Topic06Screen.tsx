import React  from 'react';
import {styles} from './Topic06Screen.style';
import { Screen, Header, Text} from '@components';

export const Topic06Screen = () => {
    return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Earthquakes</Text>
        </Header>
      }>

    </Screen>
  );
};