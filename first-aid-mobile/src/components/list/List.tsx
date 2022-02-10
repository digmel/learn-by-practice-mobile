import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './List.style';
import {TListProps} from './List.type';
import {color, size, Icon} from '@components';

export const List: FC<TListProps> = ({children}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.content]}>
        <Icon name="bullet" size={size.xs} color={color.primary} />
        {children}
      </View>
    </View>
  );
};
