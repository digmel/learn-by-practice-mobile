import React from 'react';
import {styles} from './Topic02Screen.style';
import {Screen, Header, Text} from '@components';

export const Topic02Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Asthma Attacks</Text>
        </Header>
      }
      children={undefined}></Screen>
  );
};
