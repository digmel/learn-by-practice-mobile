import {StyleSheet} from 'react-native';
import {size, color} from '@components';

export const styles = StyleSheet.create({
  container: {},

  imageContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listContainer: {
    marginLeft: size.xl,
  },

  listSectionContainer: {
    backgroundColor: color.primary,
    paddingVertical: size.l,
    borderBottomRightRadius: 28,
    borderTopRightRadius: 118,
    marginRight: size.xl,
  },
});
