import {StyleSheet} from 'react-native';
import {size, color} from '@components';

export const styles = StyleSheet.create({
  container: {
    height: 184,
    width: 153,
    borderColor: color.dark,
    borderWidth: 1,
    borderRadius: size.l,
    marginBottom: size.l,
    marginRight: size.m,
  },

  svgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '75%',
  },

  titleContainer: {
    flexBasis: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
