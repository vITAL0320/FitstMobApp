import React, { useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { gStyle } from '../styles/style';

export default function Test({ route }) {
    return (
        <View>
            <Text style={gStyle.title}>{route.params.fullInfo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
});