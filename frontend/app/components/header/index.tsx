import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Info} from 'react-native-feather';
import {styles} from './styles';
import {colors} from '@theme/colors';

const logo = require('../../assets/logo.png');

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <Image style={styles.tinyLogo} source={logo} />
        <Text style={styles.title}>LETRANDO</Text>
      </View>
      <View style={styles.viewBottom}>
        <TouchableOpacity style={styles.btnShare}>
          <Info strokeWidth={2} width={20} height={20} color={colors.wrong} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
