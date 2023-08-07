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
    paddingTop: 16,
    flex: 1,
    backgroundColor: colors.background
  },
  tabNavigatorStyle: {
    backgroundColor: colors.background
  },
  tabBarStyle: {
    backgroundColor: colors.background,
    borderTopWidth: adjust(0),
    borderRadius: adjust(6),
  },
  tabBarStyleSize: {
    fontSize: adjust(30),
  },
  title: {
    fontWeight: 'bold',
    color: colors.title,
    fontSize: adjust(20),
    textAlign: 'center',
  },
});