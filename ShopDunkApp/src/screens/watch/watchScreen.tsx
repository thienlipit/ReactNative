import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';

const WatchScreen = ({ navigation }: any) => {
    return (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>watchScreen</Text>

        {/* <Button title='Move to Home screen' onPress={() => navigation.navigate('Home')} /> */}

    </View>
    );
};

export default WatchScreen;