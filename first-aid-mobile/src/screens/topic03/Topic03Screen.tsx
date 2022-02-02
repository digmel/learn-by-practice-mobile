import React  from 'react';
import {styles} from './Topic03Screen.style';
import { Screen, Header, Text} from '@components';

export const Topic03Screen = () => {
    return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasMenu hasBack>
          <Text variation="subtitle">Heart Attack</Text>
        </Header>
      }>

    </Screen>
  );
};