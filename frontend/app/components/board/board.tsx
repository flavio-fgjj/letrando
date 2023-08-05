import React, { useEffect, useState } from 'react';
import { View, FlatList, KeyboardAvoidingView, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

// style
import {styles} from './styles';

interface Props {
	word: string
}

export const Board = (props: Props) => {
  const rows: number = 5;
  const [keyForKeyboard, setKeyForKeyboard] = useState(0);

  // const getNewKey = () => {
  //   let total = keyForKeyboard.length
  //   do {
  //     let newNumber = Math.floor(Math.random() * 11);
  //     let newNumberAlreadyExists = keyForKeyboard.includes(newNumber);
  //     if (!newNumberAlreadyExists) {
  //       keyForKeyboard.push(newNumber);
  //     }
  //   } while (keyForKeyboard.length > total)
  // }

  interface BoardRowKey {
    key: Number
  }

  const BoardRow = ({item}: any) => {
    // console.log(item)
    return (
      <KeyboardAvoidingView key={`${item.index}_${props.word}_${item.item}`}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
          <TextInput style={styles.square} showSoftInputOnFocus={false} />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
    )
  }

  return (
    <View style={styles.boardContainer}>
      {
        Array.from(Array(rows), (e, i) => {
          let index = i;
          let random = Math.floor(Math.random() * 11) * i * Math.floor(Math.random() * 50);
          return (
            <FlatList
              //key={`${i}_${props.word}`}
              horizontal={true}
              data={[...props.word]}
              keyExtractor={(letter) => `${random}` }
              renderItem={(item) => <BoardRow item={item}/>}
            />
          )
        })
      }
    </View>
	);
}