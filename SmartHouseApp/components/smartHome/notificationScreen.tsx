import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';

const NotificationScreen = ({navigation}) => {
    return ( <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>NotificationScreen screen</Text>

            <Button title='Move to Home screen' onPress={() => navigation.navigate('Home')} />

        </View>
    )
    
}

export default NotificationScreen;