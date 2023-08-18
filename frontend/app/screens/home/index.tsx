import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert, ScrollView } from 'react-native';

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
import { constColors, CLEAR, ENTER } from 'app/shared/constants';

const Tab = createMaterialTopTabNavigator();
const NUMBER_OF_TRIES = 5;

const copyArray = (arr: any) => {
  return [...arr.map((row: any) => [...row])];
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

  const onKeyPressed = (key: string) => {
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
      return colors.background;
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