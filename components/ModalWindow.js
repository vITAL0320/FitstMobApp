import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useContext } from 'react';
import { VisibleContext } from './Context';


export default function ModalWindow({ navigation }) {
  const { visible, setVisible } = useContext(VisibleContext);
  

  return (
  
        <Modal
        isVisible={visible}
        onBackdropPress={() => {setVisible(false); }}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        style={{ justifyContent: 'flex-end', margin: 0 }}
        >
        <View style={styles.modalWindow}>
          <View marginTop={60}>
            <TouchableOpacity onPress={() => {navigation.navigate('Main'); setVisible(false)}}>
              <View style={styles.blockModalList}>
                <AntDesign name="book" style={styles.iconModalWindow}/>
                    <Text style={styles.titleModal}>
                      Учебник JS
                    </Text>
            </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {navigation.navigate('Courses'); setVisible(false)}}>
            <View style={styles.blockModalList}>
              <Entypo name="open-book" style={styles.iconModalWindow} />
                  <Text style={styles.titleModal}>
                    Курсы
                  </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Compiler'); setVisible(false)}}>
          <View style={styles.blockModalList}>
            <MaterialCommunityIcons name="console" style={styles.iconModalWindow} />
                <Text style={styles.titleModal}>
                  Компилятор
                </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity >
          <View style={styles.blockModalList}>
            <Feather name="settings" style={styles.iconModalWindow} />
                <Text style={styles.titleModal}>
                  Настройки
                </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Feedback'); setVisible(false)}}>
          <View style={styles.blockModalList}>
            <MaterialIcons name="support-agent" style={styles.iconModalWindow} />
                <Text style={styles.titleModal}>
                  Обратная связь
                </Text>
          </View>
          </TouchableOpacity>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  blockModalList: {
    paddingTop: 15,
    marginTop: 10,
    borderTopWidth: 1,
    width: 220,
    alignSelf: 'center',
    borderColor: '#A9A9A9',
  },
  iconModalWindow: {
    fontSize: 24,
    color: 'black',
    position: 'absolute',
    paddingTop: 15,
  },
  titleModal: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'kt-light',
    marginLeft: '20%',
  },
  modalWindow: {
    width: '70%',
    height: '100%',
    backgroundColor: '#DCDCDC',
  },
  imgBook: {
    width: '100%',
    height: 200,
  },
});