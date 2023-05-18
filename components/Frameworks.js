import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import { gStyle } from '../styles/style';
import ModalWindow from './ModalWindow';


export default function Courses({navigation}) {

  return (
    <ScrollView style={gStyle.container}>
      <ModalWindow navigation={navigation}/>
          <View>
              <Text style={gStyle.title}>Курсы</Text>
              {/* Первый блок с JS */}
              <View style={gStyle.blocks}>
                <Image
                source={require('../assets/Angular.png')}
                style={gStyle.imgBook}
                />
                <Text style={gStyle.title} marginTop={0}>Angular</Text>
              </View>
              <View style={gStyle.blocks} alignSelf={'flex-end'}>
                <Image
                  source={require('../assets/ReactNative.png')}
                  style={gStyle.imgBook}
                  />
                  <Text style={gStyle.title} marginTop={0}>React</Text>
              </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});