import { StyleSheet, Dimensions } from 'react-native';

// colors
import {colors} from '../../theme/colors';

// utils
import { adjust,hp,wp } from 'app/utils/adjustments';

const windowHeight = Dimensions.get('window').height;

const { width: SIZE, height: HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  boardContainer: {
    //marginTop: adjust(20),
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, 
    backgroundColor: '#a8896c',
    flexDirection: 'column'
  },
  // abcButtonSize: {
  //   width: wp(30),
  //   height: hp(30),
  //   maxWidth: wp(30),
  //   maxHeight: hp(30),
  // },
  square: {
    width: wp(SIZE * 0.1),
    // marginBottom: 2,

    borderWidth: wp(1),
    borderColor: '#3C3C3C',
    borderRadius: adjust(6),

    textAlign: 'center', 
    overflow: 'hidden'
  },
});