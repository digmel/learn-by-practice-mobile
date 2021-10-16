import React, {FC} from 'react';
import {TTemplateScreenViewProps} from './template.type';
import {styles} from './template.style';
import {Section, Screen, Header, Text} from '@components';

export const TemplateScreenView: FC<TTemplateScreenViewProps> = ({}) => {
  return (
    <Screen style={styles.container} header={<Header hasMenu />}>
      <Section>
        <Text>Hello</Text>
      </Section>
    </Screen>
  );
};
