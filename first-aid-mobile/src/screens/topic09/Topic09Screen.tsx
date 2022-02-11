import React from 'react';
import {styles} from './Topic09Screen.style';
import {Screen, Header, Text, Section, List} from '@components';

export const Topic09Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Hurricanes</Text>
        </Header>
      }>
      <Section>
        <Text variation="H1_bold">Always</Text>
      </Section>

      <Section>
        <List>Have your emergency kit ready</List>
        <List>Secure windows and doors</List>
        <List>Cut dead branches, trees </List>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">During </Text>
        <Text variation="H1_light">Hurricanes</Text>
      </Section>

      <Section>
        <Text>
          You may need evacuation, be prepared for that. Avoid walking or
          driving through flooded roads and bridges. Remember, after the
          hurricane eye passes, it will return from the opposite direction.
        </Text>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">After </Text>
        <Text variation="H1_light">Hurricanes</Text>
      </Section>

      <Section>
        <Text>
          Be prepared for secondary disasters like flooding, landslides,
          building damage. Make sure that your home is safe, check the walls,
          doors, staircases, and windows for damage. Don’t forget that water may
          have been contaminated.
        </Text>
      </Section>
    </Screen>
  );
};
