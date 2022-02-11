import React from 'react';
import {styles} from './Topic06Screen.style';
import {Screen, Header, Text, Section, List} from '@components';

export const Topic06Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Earthquakes</Text>
        </Header>
      }>
      <Section>
        <Text variation="H1_bold">Always</Text>
      </Section>

      <Section>
        <List>Have your emergency kit ready</List>
        <List>Pick safe places in each room</List>
        <List>Review evacuation plans </List>
      </Section>

      <Section>
        <Text variation="H1_bold">Inside The Building</Text>
      </Section>

      <Section>
        <Text>
          Stay outside and go to an open area away from buildings, power lines,
          trees and streetlights. Lay down and stay on the ground until the
          shaking stops.
        </Text>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">Driving during </Text>
        <Text variation="H1_light">Earthquakes</Text>
      </Section>

      <Section>
        <List>Pull over to a clear area</List>
        <List>Avoid bridges, overpasses, buildings</List>
        <List>Put on your seatbelt and stay in the car</List>
        <List>
          Don’t attempt to get out of a car if there are downed power lines
          across it
        </List>
      </Section>

      <Section variation="headline">
        <Text variation="H1_bold">After </Text>
        <Text variation="H1_light">Earthquakes</Text>
      </Section>

      <Section>
        <Text>
          After an earthquake, expect and prepare for potential aftershocks,
          fire, landslides, tsunami. Look carefully if there is spilled gasoline
          or other flammable liquids
        </Text>
      </Section>
    </Screen>
  );
};
