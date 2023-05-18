import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import {useFonts} from 'expo-font';
import MainStack from './navigate';
import { ScrollView } from 'react-native-gesture-handler';

const fonts = { 
  'kt-bold': require('./assets/fonts/Kanit-Bold.ttf'),
  'kt-light': require('./assets/fonts/Kanit-Light.ttf')
};

export default function App() {
  const [loaded] = useFonts(fonts);

  if(loaded) {
  return (
    
    <MainStack/>
  );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  
});