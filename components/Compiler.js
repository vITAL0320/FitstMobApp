import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Compiler() {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://www.programiz.com/javascript/online-compiler/' }} />
    </View>
  );
}

