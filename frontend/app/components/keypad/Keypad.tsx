import React from 'react';
import {View, FlatList, Pressable, Text} from 'react-native';

// style
import {styles, keyWidth} from './styles';

// constants
import {ENTER, CLEAR, constColors, keys} from '../../shared/constants';
import {colors} from '@theme/colors';

interface Props {
  onKeyPressed: (letter: string) => void;
  greenCaps: string[];
  yellowCaps: string[];
  greyCaps: string[];
}

interface PropsToComponent {
  onKeyPressed: (letter: string) => void;
  greenCaps: string[];
  yellowCaps: string[];
  greyCaps: string[];
  letter: string;
}

const isLongButton = (key: string) => {
  return key === ENTER || key === CLEAR;
};

const getKeyBGColor = (key: string, props: Props) => {
  if (props.greenCaps.includes(key)) {
    return constColors.primary;
  }
  if (props.yellowCaps.includes(key)) {
    return constColors.secondary;
  }
  if (props.greyCaps.includes(key)) {
    //return constColors.darkgrey;
    return '#FF4500';
  }

  return key !== '' ? constColors.grey : colors.notification;
};

const KeypadRow = (p: PropsToComponent) => {
  return (
    <Pressable
      style={[
        styles.key,
        isLongButton(p.letter) ? {width: keyWidth * 1.4} : {},
        {backgroundColor: getKeyBGColor(p.letter, p)},
      ]}
      key={p.letter}
      onPress={() => p.onKeyPressed(p.letter)}
      disabled={p.greyCaps.includes(p.letter)}>
      <Text style={styles.keyText}>{p.letter && p.letter.toUpperCase()}</Text>
    </Pressable>
  );
};

export const Keypad = (props: Props) => {
  return (
    <View style={styles.keypadContainer}>
      <FlatList
        horizontal={true}
        data={keys[0]}
        keyExtractor={letter => letter}
        renderItem={({item}) => (
          <KeypadRow
            greenCaps={props.greenCaps}
            greyCaps={props.greyCaps}
            onKeyPressed={props.onKeyPressed}
            yellowCaps={props.yellowCaps}
            letter={item}
          />
        )}
      />
      <FlatList
        horizontal={true}
        data={keys[1]}
        keyExtractor={letter => letter}
        renderItem={({item}) => (
          <KeypadRow
            greenCaps={props.greenCaps}
            greyCaps={props.greyCaps}
            onKeyPressed={props.onKeyPressed}
            yellowCaps={props.yellowCaps}
            letter={item}
          />
        )}
      />
      <FlatList
        horizontal={true}
        data={keys[2]}
        keyExtractor={letter => letter}
        renderItem={({item}) => (
          <KeypadRow
            greenCaps={props.greenCaps}
            greyCaps={props.greyCaps}
            onKeyPressed={props.onKeyPressed}
            yellowCaps={props.yellowCaps}
            letter={item}
          />
        )}
      />
    </View>
  );
};
