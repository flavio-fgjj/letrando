import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Routes from '@router/index.routes';
import { colors } from '@theme/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, 
    alignItems: 'center', 
  },
});