import {StyleSheet, Dimensions} from 'react-native';

// colors
import {colors} from '../../theme/colors';

// utils
import {adjust, hp, wp} from 'app/utils/adjustments';
import {constColors} from 'app/shared/constants';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  map: {
    alignSelf: 'stretch',
    marginVertical: adjust(20),
  },
  header: {
    color: 'black',
    fontSize: adjust(18),
    fontWeight: 'bold',
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    //borderWidth: wp(2),
    //borderColor: constColors.lightgrey,
    flex: 1,
    maxWidth: wp(40),
    aspectRatio: 1,
    borderRadius: adjust(8),
    margin: adjust(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    color: constColors.black,
    fontWeight: 'bold',
    fontSize: adjust(20),
  },

  // tabNavigatorStyle: {
  //   backgroundColor: colors.background,
  //   alignSelf: 'stretch',
  //   marginTop: 'auto',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'column',
  // },
  // tabBarStyle: {
  //   backgroundColor: colors.background,
  //   borderTopWidth: adjust(0),
  //   borderRadius: adjust(6),
  // },
  // tabBarIndicatorStyle: {
  //   borderColor: colors.border,
  //   // backgroundColor: colors.turquoise,
  // },
  // tabBarStyleSize: {
  //   fontSize: adjust(30),
  //   color: colors.border,
  // },
  // controlText: {
  //   color: colors.title,
  //   fontSize: adjust(32),
  // },

  wordPlacar: {
    alignSelf: 'center',
    paddingVertical: 20,
    flexDirection: 'column',
  },
  wordPlacarTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  wordPlacarInfo: {
    color: 'black',
    fontSize: 18,
  },
  paginationContainer: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: adjust(10),
    paddingHorizontal: adjust(5),
    // backgroundColor: 'transparent',
  },
  paginationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(35),
    height: hp(35),
    borderRadius: adjust(18),
    marginHorizontal: adjust(4),
    backgroundColor: constColors.grey,
  },
  paginationButtonActive: {
    backgroundColor: '#22c55d',
    width: wp(40),
    height: hp(40),
    borderRadius: adjust(20),
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    //paddingHorizontal: 5,
  },
  textPagination: {
    color: 'black',
    fontSize: adjust(14),
    fontWeight: 'bold',
  },
  icon: {
    color: 'rgb(136, 136, 136)',
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  btnShare: {
    backgroundColor: colors.background,
    width: adjust(40),
    height: adjust(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: adjust(2),
    borderRadius: adjust(8),
    marginBottom: adjust(10),
  },
});
