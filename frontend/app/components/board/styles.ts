import { StyleSheet, Dimensions } from 'react-native';

// colors
import {colors} from '../../theme/colors';

// utils
import { adjust,hp,wp } from 'app/utils/adjustments';

const windowHeight = Dimensions.get('window').height;

const { width: SIZE, height: HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  boardContainer: {
    paddingVertical: adjust(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1, 
    backgroundColor: colors.background,
    flexDirection: 'column'
  },
  square: {
    width: wp(SIZE * 0.1),
    // height: hp(HEIGHT * 0.1),
    borderWidth: wp(1),
    borderColor: colors.border,
    borderRadius: adjust(6),

    textAlign: 'center', 
    overflow: 'hidden', 
    margin: adjust(2), 
    textTransform: 'uppercase',
    color: colors.text
  },
});