import React, { useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Feather, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useContext } from 'react';
import { VisibleContext } from './Context';
import { gStyle } from '../styles/style';
import {longText} from './test';

export default function Content({ navigation }) {
  const [list, setList] = useState([
    { chapter: '1 ВВЕДЕНИЕ', 
      subChapter: ['1.1 Введение в JavaScript', '1.2 Справочники и спецификации', '1.3 Редакторы кода', '1.4 Консоль разработчика'],
      fullInfo: `${longText}`
    },
  ]);
  

  return (
        <View>
            <Text style={gStyle.title}>Содержание</Text>
            <Text>1 ВВЕДЕНИЕ</Text>
            <FlatList data={list} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('test2', { fullInfo: item.fullInfo})}>
                  <Text>{item.subChapter[0]}</Text>
                </TouchableOpacity>
            )}/>
        </View>
  );
}

const styles = StyleSheet.create({
  
});