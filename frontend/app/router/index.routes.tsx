import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
};

export default StackNavigator;