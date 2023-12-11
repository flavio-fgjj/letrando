import {StyleSheet, Dimensions} from 'react-native';

// colors
import {colors} from '../../theme/colors';

// utils
import {adjust, hp, wp} from 'app/utils/adjustments';

//const windowHeight = Dimensions.get('window').height;

const {width: SIZE, height: HEIGHT} = .get('window');

export const styles = StyleSheet.create({
  boardContainer: {
    paddingVertical: adjust(12),
    // alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'column',
  },
  square: {
    width: wp(SIZE * 0.1),
    height: hp(HEIGHT * 0.1),
    borderWidth: wp(0.2),
    borderColor: colors.border,
    borderRadius: adjust(2),
    textAlign: 'center',
    overflow: 'hidden',
    margin: adjust(2),
    textTransform: 'uppercase',
    color: colors.text,
  },
});
