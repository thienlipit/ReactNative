import * as React from 'react';
import { Text, View, Image, Button, StyleSheet, ImageBackground, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';

let whoosh = new Sound('sample_12s.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
});

const SoundScreen = ({ navigation }: any) => {
    Sound.setCategory('Playback');

    const playEX = (songSelected: Sound) => {
        console.log('clicked play');
        // Play the sound with an onEnd callback
        songSelected.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
        });
    };
    const stopEX = (songSelected: Sound) => {
        console.log('clicked stop');
        songSelected.stop();
    };

    const pauseEX = (songSelected: Sound) => {
        console.log('clicked pause');
        songSelected.pause();
    };

    const next15s = (songSelected: Sound) => {
        songSelected.setCurrentTime(2);
        songSelected.play();
        songSelected.getCurrentTime((seconds) => {
            console.log('at ' + seconds);
            let newTime = seconds + 1;
            console.log('New time set:', newTime);
            // var add15 = songSelected.setCurrentTime(newTime)
            console.log('at11 ' + seconds);
            // songSelected.getCurrentTime
            // console.log('+3second ', songSelected.getCurrentTime((seconds) => {
            // console.log('+3s ', seconds)
            // songSelected.play()
            // }))
        });
        // songSelected.setCurrentTime(songSelected.getCurrentTime + 15 )
    };

    const prev15s = (songSelected: Sound) => {

    };


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'red' }}>SoundScreen Here</Text>

            <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>
                <Text style={{ color: 'black' }}>0:00</Text>
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    value={0.2}
                />
                <Text style={{ color: 'black' }}>{whoosh.getDuration()}</Text>
            </View>



            {/* <Button title='Press to Play' onPress={() => playEX(whoosh)} /> */}
            {/* <Button title='Test Stop' onPress={getInfo()} /> */}


            <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-between' }}>
                <Pressable onPress={() => prev15s(whoosh)} >
                    <Icon style={{ marginRight: 15 }} name="backward" size={30} color="#900" />
                </Pressable>

                <Pressable onPress={() => playEX(whoosh)}>
                    <Icon style={{ marginRight: 15 }} name="play" size={30} color="#900" />
                </Pressable>

                <Pressable onPress={() => pauseEX(whoosh)}>
                    <Icon style={{ marginRight: 15 }} name="pause" size={30} color="#900" />
                </Pressable>

                <Pressable onPress={() => next15s(whoosh)} >
                    <Icon name="forward" size={30} color="#900" />
                </Pressable>
            </View>


            <Button title="Sound Move to Iphone screen" onPress={() => navigation.navigate('Iphone')} />

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