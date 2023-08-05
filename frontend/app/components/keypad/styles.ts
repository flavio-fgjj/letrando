import { StyleSheet, Dimensions } from 'react-native';

// colors
import {colors} from '../../theme/colors';

// utils
import { adjust,hp,wp } from 'app/utils/adjustments';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  keypadContainer: {
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  abcButtonSize: {
    width: wp(30),
    height: hp(30),
    maxWidth: wp(30),
    maxHeight: hp(30),
  },
  enterButtonSize: {
    width: wp(60),
    height: hp(30),
    maxWidth: wp(60),
    maxHeight: hp(30),
    marginLeft: adjust(10)
  },
  square: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: wp(1),
    borderColor: '#5A5A5A',
    borderRadius: adjust(100),
    
    // backgroundColor: '#D7C6AB',

    //margin: adjust(2),
    marginBottom: adjust(5),

    // pointerEvents: 'none',
    // userSelect:'none',
  }, 
  letter: {
    fontSize: adjust(12),
    fontWeight: 'bold',
    color: '#111D12',
    textTransform: 'uppercase'
  }
});