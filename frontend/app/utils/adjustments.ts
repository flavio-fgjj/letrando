import {PixelRatio, Platform, Dimensions} from 'react-native';
import {
 heightPercentageToDP as hp2dp,
 widthPercentageToDP as wp2dp,
} from 'react-native-responsive-screen';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;


export const adjust = (size: number) => {
 const newSize = size * scale;
 if (Platform.OS === 'ios') {
   return Math.round(PixelRatio.roundToNearestPixel(newSize));
 } else {
   return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
 }
};

export const wp = (dimension: number) => {
 return dimension === 0 ? 0 : wp2dp((dimension / 360) * 100 + '%');
};

export const hp = (dimension: number) => {
 return dimension === 0 ? 0 : hp2dp((dimension / 760) * 100 + '%');
};