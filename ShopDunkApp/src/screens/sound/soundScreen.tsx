import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';

const SoundScreen = ({ navigation }: any) => {
    return (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: 'red' }}>SoundScreen</Text>

        <Button title='Sound Move to Iphone screen' onPress={() => navigation.navigate('Iphone')} />

    </View>
    );
};

export default SoundScreen;