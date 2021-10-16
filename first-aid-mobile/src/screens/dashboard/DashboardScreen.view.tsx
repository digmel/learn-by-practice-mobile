import React, {FC} from 'react';
import {TDashboardScreenViewProps} from './DashboardScreen.type';
import {styles} from './DashboardScreen.style';
import {
  Section,
  Screen,
  Header,
  Banner,
  Card,
  CardSlider,
  size,
} from '@components';

export const DashboardScreenView: FC<TDashboardScreenViewProps> = ({
  goToExam,
  goToAllergicReactionScreen,
}) => {
  return (
    <Screen style={styles.container} isHeaderSticky header={<Header hasMenu />}>
      <Section>
        <Banner title="Check your knowledge" onPress={goToExam} />
      </Section>

      <Section topSpace={size.l}>
        <CardSlider title="Learn " subTitle="Injuries">
          <Card
            onPress={goToAllergicReactionScreen}
            cardContainerStyle={styles.firstCard}
            title="Allergic Reaction"
            image={require('assets/images/asthma-attacks.png')}
          />

          <Card
            title="Asthma Attacks"
            image={require('assets/images/asthma-attacks.png')}
          />
        </CardSlider>
      </Section>

      <Section bottomSpace={size.xxl}>
        <CardSlider title="Learn " subTitle="Natural Disaster">
          <Card
            cardContainerStyle={styles.firstCard}
            title="Topic 1"
            image={require('assets/images/get-started-screen.png')}
          />
          <Card
            title="Topic 2"
            image={require('assets/images/get-started-screen.png')}
          />
          <Card
            title="Topic 3"
            image={require('assets/images/get-started-screen.png')}
          />
          <Card
            title="Topic 4"
            image={require('assets/images/get-started-screen.png')}
          />
          <Card
            title="Topic 5"
            image={require('assets/images/get-started-screen.png')}
          />
          <Card
            title="Topic 6"
            image={require('assets/images/get-started-screen.png')}
          />
        </CardSlider>
      </Section>
    </Screen>
  );
};
