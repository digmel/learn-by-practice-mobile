import React, {FC} from 'react';
import {TDashboardScreenViewProps} from './DashboardScreen.type';
import {styles} from './DashboardScreen.style';
import {
  Section,
  Screen,
  Text,
  Header,
  Card,
  CardSlider,
  Button,
  Icon,
  color,
  size,
} from '@components';
import {View, Image} from 'react-native';

export const DashboardScreenView: FC<TDashboardScreenViewProps> = ({
  goToExam,
}) => {
  return (
    <Screen style={styles.container} isHeaderSticky header={<Header hasMenu />}>
      <Section>
        <View style={styles.banner}>
          <Text variation="H2" color={color.secondary}>
            Check your knowledge
          </Text>

          <Icon name="logo" size={size.xxl} color={color.secondary} />
          <Button
            variation="google"
            size="large"
            text="Start Test"
            onPress={goToExam}
          />
        </View>
      </Section>

      <Section topSpace={size.l}>
        <CardSlider title="Learn " subTitle="Injuries">
          <Card
            title="Allergic Reaction"
            image={require('assets/images/get-started-screen.png')}
          />
        </CardSlider>
      </Section>

      <Section bottomSpace={size.xxl}>
        <CardSlider title="Learn " subTitle="Natural Disaster">
          <Card
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
