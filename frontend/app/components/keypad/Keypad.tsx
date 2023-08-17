import React from 'react';
import { View, FlatList, Pressable, Text } from 'react-native';

// style
import {styles, keyWidth} from './styles';

// constants
import { ENTER, CLEAR, keys, constColors } from '../../shared/constants';
import { colors } from '@theme/colors';

interface Props {
  // onKeyPress: { onKeyPress: (letter: string) => void },
  onKeyPressed: (letter: string) => void;
	greenCaps: string[];
  yellowCaps: string[];
  greyCaps: string[];
}


export const Keypad = (
    // { onKeyPress }: { onKeyPress: (letter: string) => void },
    props: Props
  ) => {

  interface Letter {
    letter: string
  }

  // const keyboardFirstRow: string[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  // const keyboardSecondRow: string[] = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'del'];
  // const keyboardThirdRow: string[] = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'enter'];

  const isLongButton = (key: string) => {
    return key === ENTER || key === CLEAR;
  };

  const getKeyBGColor = (key: string) => {
    if (props.greenCaps.includes(key)) {
      return constColors.primary;
    }
    if (props.yellowCaps.includes(key)) {
      return constColors.secondary;
    }
    if (props.greyCaps.includes(key)) {
      return constColors.darkgrey;
    }
    return colors.background;
  };

  const KeypadRow = ({letter}: Letter) => {
    return (
      <Pressable  
        style={[styles.key, isLongButton(letter) ? { width: keyWidth * 1.4 } : {}, { backgroundColor: getKeyBGColor(letter) },]} 
        key={letter}
        onPress={() => props.onKeyPressed(letter)}
        disabled={props.greyCaps.includes(letter)}
        ><Text style={styles.keyText}>{letter.toUpperCase()}</Text>
      </Pressable>
    )
  }

  return (
    <View style={styles.keypadContainer}>
        <FlatList
          horizontal={true}
          data={keys[0]}
          keyExtractor={( letter ) => letter }
          renderItem={({ item }) => <KeypadRow letter={item} />}  
        />
        <FlatList
          horizontal={true}
          data={keys[1]}
          keyExtractor={( letter ) => letter }
          renderItem={({ item }) => <KeypadRow letter={item} />}  
        />
        <FlatList
          horizontal={true}
          data={keys[2]}
          keyExtractor={( letter ) => letter }
          renderItem={({ item }) => <KeypadRow letter={item} />}  
        />
    </View>
	);
}