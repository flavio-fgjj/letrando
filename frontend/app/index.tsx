import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Routes from '@router/index.routes';

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
  },
});