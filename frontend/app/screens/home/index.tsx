import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// style
import {styles} from './styles';

// components
import Loader from '@components/Loader';
import { Keypad } from '@components/keypad/Keypad';
import { Board } from '@components/board/board';

// model
import { Words } from 'app/models/word.model';


const Tab = createMaterialTopTabNavigator();

export const Home = () => {
  const [loading, setLoading] = useState(true);


  'castelo', 'gloria', 'ainda', 'bola', 'sol'


  const words: Array<Words> = [
    
    
    ];
  const words2: Array<string> = ['castelo'];

  useEffect(()=> {
  }, []);

  if (!loading) {
    return <Loader />
  }

  const FirstWord = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#a8896c' }}>
      <Board word={words[0]} />
      {/* <FlatList
        data={[words[0]]}
        keyExtractor={( letter ) => letter }
        renderItem={({item}) => <Board word={item}/>}  
      /> */}
    </View>
  );
  
  const SecondWord = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#a8896c'  }}>
      <Board word={words[1]} />
      {/* <FlatList
        data={[words[1]]}
        keyExtractor={( letter ) => letter }
        renderItem={({item}) => <Board word={item}/>}  
      /> */}
    </View>
  );

  const ThirdWord = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#a8896c'  }}>
      <Board word={words[2]} />
      {/* <FlatList
        data={[words[2]]}
        keyExtractor={( letter ) => letter }
        renderItem={({item}) => <Board word={item}/>}  
      /> */}
    </View>
  );

  const FourthWord = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#a8896c'  }}>
      
      {/* <FlatList
        data={[words[3]]}
        keyExtractor={( letter ) => letter }
        renderItem={({item}) => <Board word={item}/>}  
      /> */}
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Letrando</Text>

      <Tab.Navigator style={{padding: 10}}
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#a8896c',
            borderTopWidth: 0,
            borderRadius: 6,
          },
          tabBarLabelStyle: {
            fontSize: 30,

          }
      })}
      >
        <Tab.Screen 
          name="❶" 
          component={() => <Board word={words[0]} />}
        />
        <Tab.Screen 
          name="❷" 
          component={() => <Board word={words[1]} />}
        />
        <Tab.Screen 
          name="❸" 
          component={() => <Board word={words[2]} />}
        />
        <Tab.Screen 
          name="❹" 
          component={() => <Board word={words[3]} />}
        />
        <Tab.Screen 
          name="❺" 
          component={() => <Board word={words[4]} />}
        />
      </Tab.Navigator>

      <Keypad />
    </View>
  );
}