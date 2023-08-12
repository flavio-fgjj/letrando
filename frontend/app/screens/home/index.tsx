import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// style
import {styles} from './styles';
const logo = require('../../assets/logo.png');

// components
import Loader from '@components/Loader';
import { Keypad } from '@components/keypad/Keypad';
import { Board } from '@components/board/board';

// model
import { Words } from 'app/models/word.model';
import { colors } from '@theme/colors';


const Tab = createMaterialTopTabNavigator();

export const Home = () => {
  const [loading, setLoading] = useState(true);

  const [words, setWords] = useState<Array<Words>>([]);

  const words2: Array<string> = ['castelo', 'gloria', 'ainda', 'bola', 'sol'];

  
  useEffect(()=> {
    let n: number = 0;
    let w: Array<Words> = []
    while (n < 5) {
      w.push({
        id: n, 
        word: words2[n]
      });
      n++;
    }
    setWords(w);

    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />
  }

  
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
        <Image
          style={styles.tinyLogo}
          source={logo}
        />
        <Text style={styles.title}>Letrando</Text>
      </View>

      <Tab.Navigator style={[styles.tabNavigatorStyle, {backgroundColor: colors.background}]}
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarStyleSize, 
          // tabBarIndicatorStyle: styles.tabBarIndicatorStyle
      })}
      >
        <Tab.Screen
          name="❶"
          children={()=>{
            return(
              <Board prop={words[0]} />
            )
          }}
        />
        <Tab.Screen 
          name="❷" 
          children={()=>{
            return(
              <Board prop={words[1]} />
            )
          }}
        />
        <Tab.Screen 
          name="❸" 
          children={()=>{
            return(
              <Board prop={words[2]} />
            )
          }}
        />
        <Tab.Screen 
          name="❹" 
          children={()=>{
            return(
              <Board prop={words[3]} />
            )
          }}
        />
        <Tab.Screen 
          name="❺" 
          children={()=>{
            return(
              <Board prop={words[4]} />
            )
          }}
        />
      </Tab.Navigator>

      <Keypad />
    </View>
  );
}