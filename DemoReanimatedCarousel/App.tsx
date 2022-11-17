import React, { type PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Carousel from './Components/Carousel';
import Index from './Components/Index';


const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <Text>ok men</Text>
            <Carousel />
            <Index />
        </SafeAreaView >
    );
};

export default App;
