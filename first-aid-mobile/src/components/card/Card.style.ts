import {StyleSheet} from 'react-native';
import {size, color} from '@components';

export const styles = StyleSheet.create({
  container: {
    marginRight: size.m,
  },

  card: {
    height: 240,
    width: 200,
    borderColor: color.secondary,
    borderWidth: 1,
    borderRadius: size.l,
    marginBottom: size.l,
  },

  imageContainer: {
    flexBasis: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    flexBasis: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
