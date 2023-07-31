import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

// style
import {styles} from './styles';

// components
import Loader from '@components/Loader';


export const Home = () => {
  // const [loading, setLoading] = useState(true);

  useEffect(()=> {
  }, []);

  // if (loading) {
  //   return <Loader />
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Letrando</Text>
    </View>
  );
}