import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import { gStyle } from '../styles/style';

export default function Settings({navigation}) {
    return (
        <View style={gStyle.container}>
            <Image
                source={require('../assets/settingsImage.jpg')}
                style={styles.imgSetting}
                />
            <Text style={styles.title}>Version 1.0</Text>
            <View marginTop={'25%'}>
                <View style={styles.linksBlock}>
                    <Image
                        source={require('../assets/mailImage.png')}
                        style={styles.icon}
                        />
                <Text style={styles.title}>Mail</Text>
                </View>
                <View style={styles.linksBlock}>
                    <Image
                        source={require('../assets/vkImage.png')}
                        style={styles.icon}
                        />
                <Text style={styles.title}>Vkontakte</Text>
                </View>
                <View style={styles.linksBlock} marginTop={25}>
                    <Image
                        source={require('../assets/tgImage.png')}
                        style={styles.icon}
                        />
                <Text style={styles.title}>Telegram</Text>
                </View>
                <View style={styles.linksBlock} marginTop={25}>
                    <Image
                        source={require('../assets/pmImage.png')}
                        style={styles.icon}
                        />
                <Text style={styles.title}>Google Play</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    linksBlock: {
        width: '95%',
        height: 45,
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: '#A9A9A9',
        alignSelf: 'center',
        marginTop: 18,
    },
    icon: {
        width: 50,
        height: 50,
        left: 5,
        position: 'absolute',
        marginTop: 5,
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'kt-light',
        textAlign: 'center',
        marginTop: 15,

    },
    imgSetting: {
        width: 210,
        height: 130,
        alignSelf: 'center',
        marginTop: 15,
    }
  });