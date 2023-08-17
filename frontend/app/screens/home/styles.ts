import { StyleSheet, Dimensions } from 'react-native';

// colors
import {colors} from '../../theme/colors';

// utils
import { adjust,hp,wp } from 'app/utils/adjustments';
import { constColors } from 'app/shared/constants';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  map: {
    alignSelf: 'stretch', 
    height: 100
  }, 
  row: {
    alignSelf: 'stretch', 
    flexDirection: 'row',
    justifyContent: 'center'
  }, 
  cell: {
    borderWidth: 3, 
    //borderColor: constColors.lightgrey, 
    flex: 1, 
    maxWidth: 40,
    aspectRatio: 1, 
    borderRadius: 20,
    margin: 3,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  cellText: {
    color: constColors.black, 
    fontWeight: 'bold', 
    fontSize: 20
  },

  tabNavigatorStyle: {
    backgroundColor: colors.background, 
    alignSelf: "stretch",
    marginTop: "auto",
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'column', 
  },
  tabBarStyle: {
    backgroundColor: colors.background,
    borderTopWidth: adjust(0),
    borderRadius: adjust(6),
  },
  tabBarIndicatorStyle: {
    borderColor: colors.border,
    // backgroundColor: colors.turquoise,
  },
  tabBarStyleSize: {
    fontSize: adjust(30),
    color: colors.border
  }
});