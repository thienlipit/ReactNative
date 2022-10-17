import * as React from 'react';
import { Text, View, Image, Button, StyleSheet, ImageBackground, } from 'react-native';

const SoundScreen = ({ navigation }: any) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'red' }}>SoundScreen Here</Text>

            <Button title='Sound Move to Iphone screen' onPress={() => navigation.navigate('Iphone')} />



            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}

            />

        </View>
    );
};

export default SoundScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    logo: {
        width: 66,
        height: 58,
    },
});