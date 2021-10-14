import {StyleSheet} from 'react-native';
import {color, size} from '@components';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary500,
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 2 * size.xxl,
    flexDirection: 'row',
  },
});
