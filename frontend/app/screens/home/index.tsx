/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, Alert, ScrollView, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// style
import {styles} from './styles';

// components
import Loader from '@components/Loader';
import {Keypad} from '@components/keypad/Keypad';
import {Board} from '@components/board/board';
import {Header} from '@components/header';

// model
import {Words, WordsStorage} from 'app/models/word.model';
import {colors} from '@theme/colors';

// utils
import {CleanWordUtil} from 'app/utils/cleanedWords';
import {constColors, CLEAR, ENTER, colorsToEmoji} from 'app/shared/constants';
import {adjust} from 'app/utils/adjustments';

// // store
// import useGlobalStore from '@store/word';


// const Tab = createMaterialTopTabNavigator();
const NUMBER_OF_TRIES = 5;
const NUMBER_OF_WORDS = 4;
const STORAGE_KEY = '@letrando';

const copyArray = (arr: any) => {
  return [...arr.map((row: any) => [...row])];
};

const getDayOfTheYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.valueOf() - start.valueOf();
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
};

export const Home = () => {
  //const {words, add, update} = useGlobalStore();

  const [loading, setLoading] = useState(false);
  // const [selectedTab, setSelectedTab] = useState(0);

  const words: string[] = ['castelo', 'gloria', 'ainda', 'bola', 'sol'];
  // const word: string = words[0];
  // const arrayLetters = word.split('');

  const [rows, setRows] = useState<[[]]>([[]]);

  const [curTab, setCurTab] = useState(0);
  const [curRow, setCurRow] = useState(0);
  const [curCol, setCurCol] = useState(0);
  const [gameState, setGameState] = useState('playing'); // won, lost, playing
  const [store, setStore] = useState<WordsStorage>();
  const [curWord, setCurWord] = useState('');
  const [arrayLetters, setArrayLetters] = useState<string[]>([]);

  useEffect(() => {
    findStorage();
  }, []);

  useEffect(() => {
  }, [rows]);

  useEffect(() => {
    if (store) {
      setActualPage(curTab);
    }
  }, [curTab]);

  const setActualPage = (n: number = 0) => {
    switch (n) {
      case 0:
        setCurRow(store?.word_0?.answers ?? 0);
        setRows(store?.word_0?.tries ?? [[]]);
        setCurWord(store?.word_0?.word || '');
        setArrayLetters(store?.word_0?.word?.split('') ?? ['']);
        break;
      case 1:
        setCurRow(store?.word_1?.answers ?? 0);
        setRows(store?.word_1?.tries ?? [[]]);
        setCurWord(store?.word_1?.word || '');
        setArrayLetters(store?.word_1?.word?.split('') ?? ['']);
        break;
      case 2:
        setCurRow(store?.word_2?.answers ?? 0);
        setRows(store?.word_2?.tries ?? [[]]);
        setCurWord(store?.word_2?.word || '');
        setArrayLetters(store?.word_2?.word?.split('') ?? ['']);
        break;
      case 3:
        setCurRow(store?.word_3?.answers ?? 0);
        setRows(store?.word_3?.tries ?? [[]]);
        setCurWord(store?.word_3?.word || '');
        setArrayLetters(store?.word_3?.word?.split('') ?? ['']);
        break;
      case 4:
        setCurRow(store?.word_4?.answers ?? 0);
        setRows(store?.word_4?.tries ?? [[]]);
        setCurWord(store?.word_4?.word || '');
        setArrayLetters(store?.word_4?.word?.split('') ?? ['']);
        break;
    }
  };

  useEffect(() => {
    if (curRow > 0) {
      checkGameState();
    }
  }, [curRow]);

  const findStorage = async () => {
    // await AsyncStorage.removeItem(STORAGE_KEY);
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue != null) {
        let aux: WordsStorage = JSON.parse(jsonValue);
        let dt = new Date();
        if (aux?.date?.toString().substring(0, 10) === dt.toISOString().substring(0, 10)) {
          console.log('a', aux?.word_0?.answers);
          if (aux.word_0?.status === 'playing') {
            // const spl = aux.word_0.word !== undefined ? aux.word_0.word.split('') : [''];
            setCurWord(aux?.word_0?.word || '');
            setArrayLetters(aux.word_0.word !== undefined ? aux.word_0.word.split('') : ['']);
            // setArrayLetters(spl);
            //setRows(new Array(NUMBER_OF_TRIES).fill(new Array(spl.length).fill('')));
            setRows(aux?.word_0?.tries ?? [[]]);
            setCurRow(aux?.word_0?.answers ?? 0);
          } else if (aux.word_1?.status === 'playing') {
            // const spl = aux.word_1.word !== undefined ? aux.word_1.word.split('') : [''];
            setCurWord(aux?.word_1?.word || '');
            setArrayLetters(aux.word_1.word !== undefined ? aux.word_1.word.split('') : ['']);
            setRows(aux?.word_1?.tries ?? [[]]);
            setCurRow(aux?.word_1?.answers ?? 0);
          } else if (aux.word_2?.status === 'playing') {
            // const spl = aux.word_2.word !== undefined ? aux.word_2.word.split('') : [''];
            setCurWord(aux?.word_2?.word || '');
            setArrayLetters(aux.word_2.word !== undefined ? aux.word_2.word.split('') : ['']);
            setRows(aux?.word_2?.tries ?? [[]]);
            setCurRow(aux?.word_2?.answers ?? 0);
          } else if (aux.word_3?.status === 'playing') {
            // const spl = aux.word_3.word !== undefined ? aux.word_3.word.split('') : [''];
            setCurWord(aux?.word_3?.word || '');
            setArrayLetters(aux.word_3.word !== undefined ? aux.word_3.word.split('') : ['']);
            setRows(aux?.word_3?.tries ?? [[]]);
            setCurRow(aux?.word_3?.answers ?? 0);
          } else if (aux.word_4?.status === 'playing') {
            // const spl = aux.word_4.word !== undefined ? aux.word_4.word.split('') : [''];
            setCurWord(aux?.word_4?.word || '');
            setArrayLetters(aux.word_4.word !== undefined ? aux.word_4.word.split('') : ['']);
            setRows(aux?.word_4?.tries ?? [[]]);
            setCurRow(aux?.word_4?.answers ?? 0);
          }
        } else {
          // get words of the day
        }

        setStore(aux);
      } else {
        let dt = new Date();
        // get words of the day
        let aux: WordsStorage = {
          date: dt.toISOString(),
          words: words,
          status: 'playing',
          word_0: {
            word: words[0],
            status: 'playing',
            tries: new Array(NUMBER_OF_TRIES).fill(new Array(words[0].length).fill('')),
            answers: 0,
          },
          word_1: {
            word: words[1],
            status: 'playing',
            tries: new Array(NUMBER_OF_TRIES).fill(new Array(words[1].length).fill('')),
            answers: 0,
          },
          word_2: {
            word: words[2],
            status: 'playing',
            tries: new Array(NUMBER_OF_TRIES).fill(new Array(words[2].length).fill('')),
            answers: 0,
          },
          word_3: {
            word: words[3],
            status: 'playing',
            tries: new Array(NUMBER_OF_TRIES).fill(new Array(words[3].length).fill('')),
            answers: 0,
          },
          word_4: {
            word: words[4],
            status: 'playing',
            tries: new Array(NUMBER_OF_TRIES).fill(new Array(words[4].length).fill('')),
            answers: 0,
          },
        };

        const spl = aux !== undefined ? aux.word_0?.word?.split('') : [''];
        // setLoading(true);
        setCurRow(0);
        setCurWord(aux?.word_0?.word || '');
        setArrayLetters(spl ?? ['']);
        setRows(new Array(NUMBER_OF_TRIES).fill(new Array(spl?.length).fill('')));

        setStore(aux);
      }

    } catch (e) {
      //
    }
  };

  const storeData = async (value: WordsStorage) => {
    try {
      const jsonValue = JSON.stringify(value);
      setStore(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const checkGameState = () => {
    if (checkIfWon() && gameState !== 'won') {
      Alert.alert('Uhuul', 'Você venceu!!!', [{text: 'Share', onPress: shareScore}]);
      setGameState('won');
    } else if (checkIfLost() && gameState !== 'lost') {
      Alert.alert('Meh', 'Tente novamente amanhã!!!');
      setGameState('lost');
    }
  };

  const shareScore = () => {
    const score = rows
      .map((row: any, i) =>
        row.map((cell: string, j: number) => colorsToEmoji[getCellBGColor(i,j)]).join('')
      )
      .filter((row) => row)
      .join('\n');

    const textToShare = `Me desempenho no Letrando! :) \n\n ${score}`;
    Clipboard.setString(textToShare);
    Alert.alert('Resultado copiado!', 'Compartilhe nas suas redes! :)');
  };

  const checkIfWon = () => {
    // if (rows.length === 0) {
    //   return false;
    // }
    const row: any = rows[curRow - 1];

    return row?.every((letter: string, i: number) => letter === arrayLetters[i]);
  };

  const checkIfLost = () => {
    return !checkIfWon() && curRow === rows.length;
  };

  const onKeyPressed = (key: string) => {
    if (gameState !== 'playing') {
      return;
    }

    const updatedRows: any = copyArray(rows);

    if (key === CLEAR) {
      const prevCol = curCol - 1;
      if (prevCol >= 0) {
        updatedRows[curRow][prevCol] = '';
        setRows(updatedRows);
        setCurCol(prevCol);
      }
      return;
    }

    if (key === ENTER) {
      if (curCol === rows[0].length) {
        setCurRow(curRow + 1);
        setCurCol(0);
        setRows(updatedRows);

        let aux: WordsStorage = {
          date: store?.date,
          status: store?.status,
          words: store?.words,
          word_0: curTab === 0 ? {
            answers: curRow + 1,
            status: store?.word_0?.status,
            tries: updatedRows,
            word: store?.word_0?.word,
          } : store?.word_0,
          word_1: curTab === 1 ? {
            answers: curRow ? curRow + 1 : 0,
            status: store?.word_1?.status,
            tries: updatedRows,
            word: store?.word_1?.word,
          } : store?.word_1,
          word_2: curTab === 2 ? {
            answers: curRow + 1,
            status: store?.word_2?.status,
            tries: updatedRows,
            word: store?.word_2?.word,
          } : store?.word_2,
          word_3: curTab === 3 ? {
            answers: curRow + 1,
            status: store?.word_3?.status,
            tries: updatedRows,
            word: store?.word_3?.word,
          } : store?.word_3,
          word_4: curTab === 4 ? {
            answers: curRow + 1,
            status: store?.word_4?.status,
            tries: updatedRows,
            word: store?.word_4?.word,
          } : store?.word_4,
        };
        storeData(aux);
      }

      return;
    }

    if (curCol < rows[0].length) {
      updatedRows[curRow][curCol] = key;
      setRows(updatedRows);
      setCurCol(curCol + 1);
    }
  };

  const isCellActive = (row: number, col: number) => {
    return row === curRow && col === curCol;
  };

  const getCellBGColor = (row: number, col: number) => {
    const letter: string = rows[row][col];

    if (row > curRow) {
      return constColors.grey;
    }

    // green
    if (letter === arrayLetters[col]) {
      return constColors.primary;
    }

    // yellow
    if (arrayLetters.includes(letter)) {
      return constColors.secondary;
    }

    if (row === curRow && letter === '') {
      return colors.background;
    }

    //return constColors.grey;
    return '#FF4500';
  };

  const greenCaps: string[] = rows.flatMap((row: [], i: number) =>
    row.filter((cell: number, j: number) => getCellBGColor(i, j) === constColors.primary)
  );

  const yellowCaps: string[] = rows.flatMap((row: [], i: number) =>
    row.filter((cell: number, j: number) => getCellBGColor(i, j) === constColors.secondary)
  );

  const greyCaps: string[] = rows.flatMap((row: [], i: number) =>
    row.filter((cell: number, j: number) => getCellBGColor(i, j) === '#FF4500')
  );

  if (loading) {
    return <Loader />;
  }

  const getCurStatus = (t: number) => {
    let ret = '';
    switch (t) {
      case 0:
        ret = store?.word_0?.status === 'playing' ? '⏳' : store?.word_0?.status === 'won' ? '✔️' : '❌';
        break;
      case 1:
        ret = store?.word_1?.status === 'playing' ? '⏳' : store?.word_1?.status === 'won' ? '✔️' : '❌';
        break;
      case 2:
        ret = store?.word_2?.status === 'playing' ? '⏳' : store?.word_2?.status === 'won' ? '✔️' : '❌';
        break;
      case 3:
        ret = store?.word_3?.status === 'playing' ? '⏳' : store?.word_3?.status === 'won' ? '✔️' : '❌';
        break;
      case 4:
        ret = store?.word_4?.status === 'playing' ? '⏳' : store?.word_4?.status === 'won' ? '✔️' : '❌';
        break;
    }

    return ret;
  };

  const renderPaginationButtons = () => {
    const maxButtonsToShow = 5;
    const buttons = [];

    for (let i = 0; i < maxButtonsToShow; i++) {
      buttons.push(
        <>
        <TouchableOpacity
          key={i}
          onPress={() => handlePageClick(i)}
          style={[
            styles.paginationButton,
            i === curTab ? styles.paginationButtonActive : null,
          ]}>
          {/* {
            i === 0
              ? <Text style={styles.badge}>⏳</Text>
              : i === 3 ? <Text style={styles.badge}>✔️</Text> : <Text style={styles.badge}>❌</Text>
          } */}
          <Text style={styles.badge}>{getCurStatus(i)}</Text>
          <Text style={styles.textPagination}>{i + 1}</Text>
        </TouchableOpacity>
        </>
      );
    }

    return buttons;
  };

  const handlePageClick = (p: number) => {
    setCurTab(p);
  };

  return (
    // loading
    //   ?
      <>
      <Header />

      {/* <View style={{flexDirection: 'row', padding: 5}}>
        <Pressable><Text style={styles.controlText}>{'<'}</Text></Pressable>
        <Text style={styles.controlText}> de </Text>
        <Pressable><Text style={styles.controlText}>{'>'}</Text></Pressable>
      </View> */}

      <View style={styles.paginationContainer}>
        {renderPaginationButtons()}
      </View>

      <Text style={styles.header}>Palavra {curTab + 1} de 5</Text>

      <ScrollView style={styles.map}>
        {rows.map((row: any, i: number) => (
          <View style={styles.row} key={`${curWord}-row-${i}`}>
            {row.map((letter: string, j: number) => (
              <View
                    key={`${curWord}-cell-${i}-${j}`}
                    style={[
                      styles.cell,
                      {
                        borderColor: isCellActive(i, j) ? colors.activeCell : colors.border,
                        borderWidth: isCellActive(i, j) ? adjust(4) : adjust(2),
                        backgroundColor: getCellBGColor(i, j),
                      },
                    ]}
                  >
                    <Text style={styles.cellText}>
                      {letter.toUpperCase()}
                    </Text>
                  </View>
                ))
              }
            </View>
          ))
        }

        <View style={styles.wordPlacar}>
          <Text style={styles.wordPlacarTitle}>Tentativa {curRow + 1} de 5</Text>
          {
            gameState === 'won'
              ? <Text style={styles.wordPlacarInfo}>✅ Você acertou na {curRow} tentativa.</Text>
              : <></>
          }
          {
            curRow > 0 && gameState !== 'won'
            ? <Text style={styles.wordPlacarInfo}>❌ Você já desperdiçou {curRow} {curRow === 1 ? 'tentativa' : 'tentativas'}</Text>
            : <Text style={styles.wordPlacarInfo}>💪 Você não desperdiçou nenhuma tentativa</Text>
          }
        </View>
      </ScrollView>

      <Keypad onKeyPressed={onKeyPressed} greenCaps={greenCaps} greyCaps={greyCaps} yellowCaps={yellowCaps} />
    </>
    // : <></>
  );
};
