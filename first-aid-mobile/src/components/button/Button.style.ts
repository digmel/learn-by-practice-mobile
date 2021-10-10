import {StyleSheet} from 'react-native';
import {size} from '@components';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: size.m,
    borderRadius: size.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
