import React  from 'react';
import {styles} from './Topic02Screen.style';
import { Screen, Header, Text} from '@components';

export const Topic02Screen = () => {
    return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Astma Attacks</Text>
        </Header>
      }>

    </Screen>
  );
};