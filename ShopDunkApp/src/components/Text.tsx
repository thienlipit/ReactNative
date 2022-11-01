import React from 'react';
import { Text, View, Image } from 'react-native';

const Greeting = (props: any) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Hello {props.name}</Text>
            <Image style={{ height: 200, width: 200 }} source={{ uri: props.uri }} />
            <Image style={{ height: 200, width: 200 }} source={{ uri: props.uri2 }} />
        </View>
    )
};
export default Greeting;