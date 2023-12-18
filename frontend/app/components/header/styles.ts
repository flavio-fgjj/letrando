import {StyleSheet} from 'react-native';

// colors
import {colors} from '../../theme/colors';

// utils
import {adjust, hp, wp} from 'app/utils/adjustments';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: adjust(10),
    paddingVertical: adjust(5),
    width: '100%',
    // borderWidth: 0.5,
    // borderBottomColor: 'grey',
  },
  title: {
    fontWeight: 'bold',
    color: colors.title,
    fontSize: adjust(28),
    letterSpacing: adjust(7),
  },
  tinyLogo: {
    width: wp(42),
    height: hp(42),
    marginRight: adjust(8),
    resizeMode: 'stretch',
  },
  btnShare: {
    backgroundColor: colors.background,
    width: adjust(40),
    height: adjust(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: adjust(2),
    borderRadius: adjust(8),
  },
  viewTop: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  viewBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
