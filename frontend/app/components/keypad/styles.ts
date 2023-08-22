import { StyleSheet, Dimensions } from 'react-native';

// colors and constants
import { keys, constColors } from "../../shared/constants";

// utils
import { adjust,hp,wp } from 'app/utils/adjustments';

const screenWidth = Dimensions.get("window").width;
export const keyWidth = (screenWidth - 10) / keys[0].length;
const keyHeight = keyWidth * 1.3;

export const styles = StyleSheet.create({
  keypadContainer: {
    alignSelf: "stretch",
    marginTop: "auto",
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'column', 
  },
  key: {
    width: keyWidth - 4,
    height: keyHeight - 4,
    margin: 2,
    borderRadius: 5,
    backgroundColor: constColors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    fontSize: adjust(12),
    fontWeight: 'bold',
    color: '#ff8f8f'
  }
});