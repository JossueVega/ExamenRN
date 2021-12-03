import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator1 from './Navigations/StackNavigator1'
import Funcionesprovider from './Component/Funciones'

export default function App() {
  return (
    <Funcionesprovider>
      <NavigationContainer>
        <StackNavigator1/>
      </NavigationContainer>
    </Funcionesprovider>
  );
}