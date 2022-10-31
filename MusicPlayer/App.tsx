import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const App = () => {
    const [state, setState] = useState({});
    const audioRecorderPlayer = new AudioRecorderPlayer();

    const onStartPlay = async () => {
        console.log('onStartPlay');
        const msg = await audioRecorderPlayer.startPlayer();
        console.log(msg);
        audioRecorderPlayer.addPlayBackListener((e) => {
            setState({
                currentPositionSec: e.currentPosition,
                currentDurationSec: e.duration,
                playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
                duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
            });
            return;
        });
    };

    const onStopPlay = async () => {
        console.log('onStopPlay');
        audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.removePlayBackListener();
    };

    return (
        <SafeAreaView>
            <Text>TEST</Text>
            <Button onPress={() => onStartPlay()} title="Play" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
