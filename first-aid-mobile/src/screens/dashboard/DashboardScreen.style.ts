import {StyleSheet} from 'react-native';
import {color, size} from '@components';

export const styles = StyleSheet.create({
  container: {},

  banner: {
    height: 270,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: color.secondary,
    paddingVertical: size.l,
    borderWidth: 1,
    borderRadius: size.l,
  },
});
