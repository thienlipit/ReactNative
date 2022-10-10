import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';

const MacScreen = ({ navigation }: any) => {
    return (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>MacScreen</Text>

        <Button title='Move to Iphone screen' onPress={() => navigation.navigate('Iphone')} />

    </View>
    );
};

export default MacScreen;