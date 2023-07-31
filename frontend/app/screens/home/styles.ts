import { StyleSheet, Dimensions } from 'react-native';

// colors
import {colors} from '../../theme/colors';

// utils
import { adjust,hp,wp } from 'app/utils/adjustments';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  viewHome: {
    marginTop: 35
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: adjust(20),
    textAlign: 'center',
  },
  coffText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  shield: {
    width: wp(50),
    height: hp(70),
  },
  photo: {
    width: wp(25),
    height: hp(30),
    borderRadius: hp(30 / 2),
  },
  logoImg: {
    marginLeft: 5
  }, 
  badge: {
    position: 'absolute', 
    right: -5, 
    top: windowHeight > 480 ? 40 : 30,
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: hp(30 / 2),
    width: wp(25), 
    height: hp(30)
  },
  box: {
    width: '80%',
    height: hp(80),
    backgroundColor: '#F6F6F6',
		paddingLeft: 16,
    paddingRight: 16,
		borderRadius: 6,

		flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',

		// Android
		elevation: 4,

		// iOS
		shadowColor: '#000',
		shadowOffset: {
      width: wp(0),
      height: hp(2),
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
    marginTop: 15
  },
  boxColumn: {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  boxText: {
    fontSize: adjust(10),
    color: '#999',
    textTransform: 'uppercase'
  },
  boxTextBold: {
    fontSize: adjust(18),
    color: '#333'
  }, 
  market: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  closeMarket: {
    color: '#333',
    fontSize: adjust(44),
    fontWeight: 'bold', 
  },
  logo: {
    width: wp(90), 
    height: hp(150),
    resizeMode: 'contain',
    marginTop: 10
  }
});