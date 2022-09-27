import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';

const WeatherScreen = ({navigation}) => {
    return ( <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>WeatherScreen screen</Text>

            <Button title='Move to Home screen' onPress={() => navigation.navigate('Home')} />

        </View>
    )
    
}

export default WeatherScreen;