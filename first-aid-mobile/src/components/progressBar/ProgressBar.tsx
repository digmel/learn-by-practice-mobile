import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './ProgressBar.style';
import type {TProgressBarProps} from './ProgressBar.type';

export const ProgressBar: FC<TProgressBarProps> = () => {
  return <View style={styles.container}></View>;
};
