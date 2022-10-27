import * as React from 'react';
import { Text, View, Image, Button, StyleSheet, ImageBackground, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import SoundPlayer from 'react-native-sound-player';

const SoundScreen = ({ navigation }: any) => {
    const playSong = () => {
        try {
            console.log('playing');
            // play the file tone.mp3
            SoundPlayer.playSoundFile('example', 'mp3');
            // or play from url
            // SoundPlayer.playUrl('https://example.com/music.mp3');
        } catch (e) {
            console.log('cannot play the sound file', e);
        }
    };
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'red' }}>SoundScreen Here</Text>

            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />

            {/* <Button title='Test Play' onPress={playSong()} /> */}


            <View style={{ flexDirection: 'row' }}>
                <Icon style={{ marginRight: 10 }} name="backward" size={30} color="#900" />

                {/* <Pressable onPress={playSong()}> */}
                <Icon style={{ marginRight: 10 }} name="play" size={30} color="#900" />
                {/* </Pressable> */}

                <Icon style={{ marginRight: 10 }} name="pause" size={30} color="#900" />
                <Icon style={{ marginRight: 10 }} name="forward" size={30} color="#900" />
            </View>


            <Button title='Sound Move to Iphone screen' onPress={() => navigation.navigate('Iphone')} />

            {/* <Icon name="ios-person" size={30} color="#4F8EF7" /> */}


            <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
            // onPress={loginWithFacebook}
            >
                Login with Facebook
            </Icon.Button>

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