import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ScrollView, Pressable } from 'react-native';
import Clipboard from '@react-native-community/clipboard';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// style
import {styles} from './styles';

// components
import Loader from '@components/Loader';
import { Keypad } from '@components/keypad/Keypad';
import { Board } from '@components/board/board';
import { Header } from '@components/header';

// model
import { Words } from 'app/models/word.model';
import { colors } from '@theme/colors';

// utils
import { CleanWordUtil } from 'app/utils/cleanedWords';
import { constColors, CLEAR, ENTER, colorsToEmoji } from 'app/shared/constants';

// store
import useGlobalStore from '@store/word';
const { words, add, update } = useGlobalStore();

const Tab = createMaterialTopTabNavigator();
const NUMBER_OF_TRIES = 5;

const copyArray = (arr: any) => {
  return [...arr.map((row: any) => [...row])];
}

const getDayOfTheYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.valueOf() - start.valueOf();
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
}

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const words2: string[] = ['castelo', 'gloria', 'ainda', 'bola', 'sol'];
  const word: string = words2[0];
  const arrayLetters = word.split('');

  const [rows, setRows] = useState(
    new Array(NUMBER_OF_TRIES).fill(new Array(arrayLetters.length).fill(""))
  );

  const [curTab, setCurTab] = useState(0);
  const [curRow, setCurRow] = useState(0);
  const [curCol, setCurCol] = useState(0);
  const [gameState, setGameState] = useState('playing'); // won, lost, playing

  useEffect(() => {
    if (curRow > 0) {
      checkGameState();
    }
  }, [curRow]);

  const checkGameState = () => {
    if (checkIfWon() && gameState !== 'won') {
      Alert.alert("Uhuul", "Você venceu!!!", [{text: 'Share', onPress: shareScore}]);
      setGameState("won");
    } else if (checkIfLost() && gameState !== 'lost') {
      Alert.alert("Meh", "Tente novamente amanhã!!!");
      setGameState("lost");
    }
  }

  const shareScore = () => {
    const score = rows
      .map((row, i) => 
        row.map((cell: string, j: number) => colorsToEmoji[getCellBGColor(i,j)]).join("")
      )
      .filter((row) => row)
      .join("\n");

    const textToShare = `Me desempenho no Letrando! :) \n\n ${score}`;
    Clipboard.setString(textToShare);
    Alert.alert("Resultado copiado!", "Compartilhe nas suas redes! :)");
  }

  const checkIfWon = () => {
    const row = rows[curRow -1];

    return row.every((letter: string, i: number) => letter === arrayLetters[i]);
  }

  const checkIfLost = () => {
    return !checkIfWon() && curRow === rows.length;
  }

  const onKeyPressed = (key: string) => {
    if (gameState !== 'playing') {
      return;
    }

    const updatedRows = copyArray(rows);

    if (key === CLEAR) {
      const prevCol = curCol - 1;
      if (prevCol >= 0) {
        updatedRows[curRow][prevCol] = "";
        setRows(updatedRows);
        setCurCol(prevCol);
      }
      return;
    }

    if (key === ENTER) {
      if (curCol === rows[0].length) {
        setCurRow(curRow + 1);
        setCurCol(0);
      }

      return;
    }

    if (curCol < rows[0].length) {
      updatedRows[curRow][curCol] = key;
      setRows(updatedRows);
      setCurCol(curCol + 1);
    }
  }

  const isCellActive = (row: number, col: number) => {
    return row === curRow && col === curCol
  }

  const getCellBGColor = (row: number, col: number) => {
    const letter: string = rows[row][col];

    if (row > curRow) {
      //return colors.background;
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

    return constColors.grey;
  }

  const greenCaps: string[] = rows.flatMap((row, i) => 
    row.filter((cell: number, j: number) => getCellBGColor(i, j) === constColors.primary)
  );

  const yellowCaps: string[] = rows.flatMap((row, i) => 
    row.filter((cell: number, j: number) => getCellBGColor(i, j) === constColors.secondary)
  );

  const greyCaps: string[] = rows.flatMap((row, i) => 
    row.filter((cell: number, j: number) => getCellBGColor(i, j) === constColors.grey)
  );

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Header />

      {/* <View style={{flexDirection: 'row', padding: 5}}>
        <Pressable><Text style={styles.controlText}>{'<'}</Text></Pressable>
        <Text style={styles.controlText}> de </Text>
        <Pressable><Text style={styles.controlText}>{'>'}</Text></Pressable>
      </View> */}

      <ScrollView style={styles.map}>
        {
          rows.map((row, i) => (
            <View style={styles.row} key={`${word}-row-${i}`}>
              {
                row.map((letter: string, j: number) => (
                  <View
                    key={`${word}-cell-${i}-${j}`}
                    style={[
                      styles.cell, 
                      {
                        borderColor: isCellActive(i, j) ? constColors.darkgrey : constColors.grey, 
                        backgroundColor: getCellBGColor(i, j)
                      }
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
      </ScrollView>

      <Keypad onKeyPressed={onKeyPressed} greenCaps={greenCaps} greyCaps={greyCaps} yellowCaps={yellowCaps} />
    </>
  );
}