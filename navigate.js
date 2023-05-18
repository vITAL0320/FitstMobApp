import React, {useState} from "react";
import Main from "./components/Main";
import Courses from "./components/Frameworks";
import Feedback from "./components/Feedback";
import Compiler from './components/Compiler';
import Content from './components/Content'

import test2 from './components/test2'

import { Feather} from '@expo/vector-icons';
import { View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { VisibleContext } from "./components/Context";

const Stack = createStackNavigator();


export default function Navigate() {
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
        <VisibleContext.Provider value={{ visible, setVisible}}>
        <Stack.Navigator>
            <Stack.Screen
            name='Main'
            component={Main}
            options={
                {
                    title: '',
                    headerStyle: { backgroundColor: '#e86f2b', height: 70},
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => setVisible(true)}>
                        <Feather name="menu" size={38} color="black" left={22} />
                        </TouchableOpacity>

                    ),
                    headerTitle: props => (
                        <Image
                            source={require('./assets/iconJS.jpg')}
                            style={{ width: 30, height: 32, left: 15 }}
                        />
                    ),
                }
            }
            />
            <Stack.Screen 
            name='Courses'
            component={Courses}
            options={{
                title: '',
                    headerStyle: { backgroundColor: '#e86f2b', height: 70},
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => setVisible(true)}>
                        <Feather name="menu" size={38} color="black" left={22} />
                        </TouchableOpacity>

                    ),
                    headerTitle: props => (
                        <Image
                            source={require('./assets/iconJS.jpg')}
                            style={{ width: 30, height: 32, left: 15 }}
                        />
                    ),
            }}
            />
            <Stack.Screen 
                name='Feedback'
                component={Feedback}
                options={{
                    title: 'Назад',
                    headerStyle: { backgroundColor: '#DCDCDC', height: 70},
                }}
            />
            <Stack.Screen
            name='Compiler'
            component={Compiler}
            options={
                {
                    title: '',
                    headerStyle: { backgroundColor: '#e86f2b', height: 70},
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => setVisible(true)}>
                        <Feather name="menu" size={38} color="black" left={22} />
                        </TouchableOpacity>

                    ),
                    headerTitle: props => (
                        <Image
                            source={require('./assets/iconJS.jpg')}
                            style={{ width: 30, height: 32, left: 15 }}
                        />
                    ),
                }
            }
            />
             <Stack.Screen 
                name='Content'
                component={Content}
                options={{
                    title: 'Назад',
                    headerStyle: { backgroundColor: '#DCDCDC', height: 70},
                }}
            />

        <Stack.Screen 
                name='test2'
                component={test2}
                options={{
                    title: 'Назад',
                    headerStyle: { backgroundColor: '#DCDCDC', height: 70},
                }}
            />
        </Stack.Navigator>
        </VisibleContext.Provider>
    </NavigationContainer>
    </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });


