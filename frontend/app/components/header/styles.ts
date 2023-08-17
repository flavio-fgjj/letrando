import { StyleSheet, Dimensions } from 'react-native';

// colors
import {colors} from '../../theme/colors';

// utils
import { adjust,hp,wp } from 'app/utils/adjustments';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bold',
    color: colors.title,
    fontSize: adjust(32),
    textAlign: 'center',
    letterSpacing: adjust(7)
  },
  tinyLogo: {
    width: wp(60),
    height: hp(80),
    marginRight: adjust(10),
    resizeMode: 'stretch',
  },
});