import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';

const WatchScreen = ({ navigation }: any) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'red' }}>watchScreen</Text>

            <Button title='Watch screen move to Home screen' onPress={() => navigation.navigate('Iphone')} />

        </View>
    );
};

export default WatchScreen;