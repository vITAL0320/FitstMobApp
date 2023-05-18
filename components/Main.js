import React, {useContext} from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import { gStyle } from '../styles/style';
import ModalWindow from './ModalWindow';
import SwipeGesture from 'react-native-swipe-gestures';
import { VisibleContext } from './Context';

export default function Main({navigation}) {

  const { setVisible } = useContext(VisibleContext);

  const onSwipeRight = () => {
    setVisible(true);
  };

  const onSwipeLeft = () => {
    setVisible(false);
  };

  const loadScene = () => {
    navigation.navigate('Content')
  }
  return (
    <ScrollView style={gStyle.container} >
    <ModalWindow navigation={navigation}/>
    <SwipeGesture onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}>
          <View>
              <Text style={gStyle.title}>Учебник по JavaScript</Text>
              {/* Первый блок с JS */}
              <View style={gStyle.blocks}>
                <TouchableOpacity onPress={() => navigation.navigate('Content')}>
                <Image
                source={require('../assets/iconJS.jpg')}
                style={gStyle.imgBook}
                />
                </TouchableOpacity>
                <Text style={gStyle.title} marginTop={0}>JavaScript</Text>
              </View>
              <View style={gStyle.blocks} alignSelf={'flex-end'}>
                <Image
                  source={require('../assets/HtmlCSS.jpg')}
                  style={gStyle.imgBook}
                  />
                  <Text style={gStyle.title} marginTop={0}>HTML&CSS</Text>
              </View>
        </View>
        </SwipeGesture>
      </ScrollView>
      
  );
}

const styles = StyleSheet.create({
 
});