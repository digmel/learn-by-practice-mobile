import React, {FC} from 'react';
import {TDashboardScreenViewProps} from './DashboardScreen.type';
import {styles} from './DashboardScreen.style';
import {
  Section,
  Screen,
  Header,
  Card,
  CardSlider,
  size,
  Logo,
  Text,
  Button,
} from '@components';

export const DashboardScreenView: FC<TDashboardScreenViewProps> = ({
  goToExam,
  goToAllergicReactionScreen,
}) => {
  return (
    <Screen style={styles.container} isHeaderSticky header={<Header hasMenu />}>
      <Section topSpace={size.l} containerStyle={styles.logoContainer}>
        <Logo />
      </Section>

      <Section>
        <Text textStyle={styles.bannerText}>Check your Knowledge</Text>
      </Section>

      <Section topSpace={size.l}>
        <Button text="Start Test" variation="secondary" onPress={goToExam} />
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
          <Card cardContainerStyle={styles.firstCard} title="Topic 1" />
          <Card title="Topic 2" />
          <Card title="Topic 3" />
          <Card title="Topic 4" />
          <Card title="Topic 5" />
          <Card title="Topic 6" />
        </CardSlider>
      </Section>
    </Screen>
  );
};
