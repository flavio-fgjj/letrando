import React from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

// style
import {styles} from './styles';

// model
import {Words} from 'app/models/word.model';

interface Props {
  prop: Words;
}

interface Aux {
  id: number;
  row: number;
  letter: string;
}

const BoardRow = (id: any) => {
  return (
    <KeyboardAvoidingView key={id}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}>
        <TextInput style={styles.square} showSoftInputOnFocus={false} id={id}>
          {}
        </TextInput>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const Board = (props: Props) => {
  const word: string = props.prop.word ?? '';
  const rows: number = 5;

  let list: Aux[] = [];
  let wordArray = [...word];
  let keys = wordArray.length * 5;

  Array.from(Array(rows), (e, i) => {
    for (let j: number = 0; j < wordArray.length; j++) {
      list.push({
        id: keys,
        letter: wordArray[j],
        row: i,
      });
      keys--;
    }
  });

  return (
    <View style={styles.boardContainer}>
      {Array.from(Array(rows), (e, i) => {
        let newRow = list.filter(x => x.row === i);
        return (
          <FlatList
            key={`${i.toString()}_${word}`}
            horizontal={true}
            data={newRow}
            keyExtractor={({id}) => `${id.toString()}_${word}`}
            renderItem={(item: any) => (
              <BoardRow id={`${item.item.id}_${word}`} />
            )}
          />
        );
      })}
    </View>
  );
};
