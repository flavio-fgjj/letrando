import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const logo = require('../../assets/logo.png');

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={logo} />
      <Text style={styles.title}>LETRANDO</Text>
    </View>
  );
};
