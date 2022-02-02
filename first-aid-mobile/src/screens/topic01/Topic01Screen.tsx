import React  from 'react';
import {styles} from './Topic01Screen.style';
import { Screen, Header, Text} from '@components';

export const Topic01Screen = () => {
    return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Anaphylaxis</Text>
        </Header>
      }>

    </Screen>
  );
};
