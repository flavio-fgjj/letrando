import {StyleSheet} from 'react-native';

// colors
import {colors} from '../../theme/colors';

// utils
import {adjust, hp, wp} from 'app/utils/adjustments';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    // marginTop: adjust(8),
    paddingHorizontal: adjust(4),
  },
  title: {
    fontWeight: 'bold',
    color: colors.title,
    fontSize: adjust(32),
    textAlign: 'center',
    letterSpacing: adjust(7),
  },
  tinyLogo: {
    width: wp(50),
    height: hp(50),
    marginRight: adjust(10),
    resizeMode: 'stretch',
  },
});
