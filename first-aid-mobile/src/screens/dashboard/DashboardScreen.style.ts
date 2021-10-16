import {StyleSheet} from 'react-native';
import {color, size} from '@components';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
  },

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
