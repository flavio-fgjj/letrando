import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

// style
import {styles} from './styles';

export const Keypad = () => {
  interface Letter {
    letter: string
  }

  const keyboardFirstRow: Array<string> = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const keyboardSecondRow: Array<string> = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'del'];
  const keyboardThirdRow: Array<string> = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'enter'];

  const KeypadRow = ({letter}: Letter) => {
    return (
      <TouchableOpacity  
        style={[styles.square, letter === 'enter' || letter === 'del' ? styles.enterButtonSize: styles.abcButtonSize]} key={letter}
        onPress={() => {}}
        ><Text style={styles.letter}>{letter}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.keypadContainer}>
      <FlatList
        horizontal={true}
        data={keyboardFirstRow}
        keyExtractor={( letter ) => letter }
        renderItem={({ item }) => <KeypadRow letter={item} />}  
      />
      <FlatList
        horizontal={true}
        data={keyboardSecondRow}
        keyExtractor={( letter ) => letter }
        renderItem={({ item }) => <KeypadRow letter={item} />}  
      />
      <FlatList
        horizontal={true}
        data={keyboardThirdRow}
        keyExtractor={( letter ) => letter }
        renderItem={({ item }) => <KeypadRow letter={item} />}  
      />
    </View>
	);
}