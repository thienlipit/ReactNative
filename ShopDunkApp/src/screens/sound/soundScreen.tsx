import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';

const SoundScreen = ({ navigation }: any) => {
    return (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>soundScreen</Text>

        {/* <Button title='Move to Home screen' onPress={() => navigation.navigate('Home')} /> */}

    </View>
    );
};

export default SoundScreen;