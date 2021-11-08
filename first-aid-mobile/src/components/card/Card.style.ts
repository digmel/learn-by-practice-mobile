import {StyleSheet} from 'react-native';
import {size, color} from '@components';

export const styles = StyleSheet.create({
  container: {
    height: 184,
    width: 153,
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: size.l,
    marginBottom: size.l,
    marginRight: size.m,
  },

  svgContainer: {
    height: 154,
    width: 153,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    flexBasis: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
