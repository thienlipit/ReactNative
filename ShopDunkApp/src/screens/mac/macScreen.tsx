import React from 'react';
import { Text, View, Image, Button, Alert, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { useState } from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import PlayButton from './PlayButton';
import Slider from '@react-native-community/slider';


let dirs = RNFetchBlob.fs.dirs.DocumentDir;
const playlist = [
    {
        title: 'Emergence of Talents',
        path: './track3.mp3',
        cover:
            'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
    },
    {
        title: 'Shippuden',
        path: './track3.mp3',
        cover:
            'https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
    },
    {
        title: 'Rising Dragon',
        path: './track3.mp3',
        cover:
            'https://images.unsplash.com/photo-1512036666432-2181c1f26420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    },
    {
        title: 'Risking it all',
        path: './track3.mp3',
        cover:
            'https://images.unsplash.com/photo-1501761095094-94d36f57edbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80',
    },
    {
        title: 'Gekiha',
        path: './track3.mp3',
        cover:
            'https://images.unsplash.com/photo-1471400974796-1c823d00a96f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    },
];

const MacScreen = ({ navigation }: any) => {
    const [isAlreadyPlay, setisAlreadyPlay] = useState(false);
    const [duration, setDuration] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [percent, setPercent] = useState(0);
    const [current_track, setCurrentTrack] = useState(0);
    const [inprogress, setInprogress] = useState(false);
    const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());

    // const [state, setState] = useState({});
    const audioRecorderPlayer1 = new AudioRecorderPlayer();

    // const onStartRecord = async () => {
    //     const result = await audioRecorderPlayer.startRecorder();
    //     audioRecorderPlayer.addRecordBackListener((e) => {
    //         setState({
    //             recordSecs: e.currentPosition,
    //             recordTime: audioRecorderPlayer.mmssss(
    //                 Math.floor(e.currentPosition),
    //             ),
    //         });
    //         return;
    //     });
    //     console.log(result);
    // };

    // const onStopRecord = async () => {
    //     const result = await audioRecorderPlayer.stopRecorder();
    //     audioRecorderPlayer.removeRecordBackListener();
    //     setState({
    //         recordSecs: 0,
    //     });
    //     console.log(result);
    // };

    // const onStartPlay = async () => {
    //     console.log('onStartPlay');
    //     const msg = await audioRecorderPlayer.startPlayer();
    //     console.log(msg);
    //     audioRecorderPlayer.addPlayBackListener((e) => {
    //         setState({
    //             currentPositionSec: e.currentPosition,
    //             currentDurationSec: e.duration,
    //             playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
    //             duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
    //         });
    //         return;
    //     });
    // };

    // const onPausePlay = async () => {
    //     await audioRecorderPlayer.pausePlayer();
    // };

    // const onStopPlay = async () => {
    //     console.log('onStopPlay');
    //     audioRecorderPlayer.stopPlayer();
    //     audioRecorderPlayer.removePlayBackListener();
    // };

    const changeTime = async (seconds: any) => {
        // 50 / duration
        let seektime = (seconds / 100) * duration;
        setTimeElapsed(seektime);
        audioRecorderPlayer.seekToPlayer(seektime);
    };

    const onStartPress = async (e: any) => {
        setisAlreadyPlay(true);
        setInprogress(true);
        const path = 'file://' + dirs + '/' + playlist[current_track].path;
        audioRecorderPlayer.startPlayer('track3.mp3');
        audioRecorderPlayer.setVolume(1.0);

        audioRecorderPlayer.addPlayBackListener(async (e) => {
            if (e.currentPosition === e.duration) {
                audioRecorderPlayer.stopPlayer();
            }
            let percent = Math.round(
                (Math.floor(e.currentPosition) / Math.floor(e.duration)) * 100,
            );
            setTimeElapsed(e.currentPosition);
            setPercent(percent);
            setDuration(e.duration);
        });
    };

    const onPausePress = async (e: any) => {
        setisAlreadyPlay(false);
        audioRecorderPlayer.pausePlayer();
    };

    const onStopPress = async (e: any) => {
        await audioRecorderPlayer.stopPlayer();
        await audioRecorderPlayer.removePlayBackListener();
    };

    const onForward = async () => {
        let curr_track = playlist[current_track];
        let current_index = playlist.indexOf(curr_track) + 1;
        if (current_index === playlist.length) {
            setCurrentTrack(1);
        } else {
            setCurrentTrack((current_track) => current_track + 1);
        }
        // onStopPress().then(async () => {
        // await onStartPress();
        // });
    };

    const onBackward = async () => {
        let curr_track = playlist[current_track];

        let current_index = playlist.indexOf(curr_track);

        if (current_index === 0) {
            setCurrentTrack(5);
        } else {
            setCurrentTrack((current_track) => current_track - 1);
        }
        // onStopPress().then(async () => {
        //     await onStartPress();
        // });
    };


    return (

        // <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        //     <Text style={{ color: 'black' }}>MacScreen for test</Text>
        //     {/* <Button onPress={() => onStartRecord()} title='Record' />

        //     <Button onPress={() => onStopRecord()} title='Stop Record' />

        //     <Button onPress={() => onStartPlay()} title='Start Play' /> */}




        // </View>


        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.textLight, { fontSize: 12 }]}>PLAYLIST</Text>
                    <Text style={styles.text}>Instaplayer</Text>
                    <Button onPress={async () => audioRecorderPlayer1.startPlayer('track3.mp3')} title="PLAY" />
                </View>
                {/* <View style={styles.coverContainer}>
                    <Image
                        source={{
                            uri: playlist[current_track].cover,
                        }}
                        style={styles.cover}
                    />
                </View>

                <View style={styles.trackname}>
                    <Text style={[styles.textDark, { fontSize: 20, fontWeight: '500' }]}>
                        {playlist[current_track].title}
                    </Text>
                </View> */}
            </View>
            {/* <View style={styles.seekbar}>
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    // trackStyle={styles.track}
                    // thumbStyle={styles.thumb}
                    value={percent}
                    minimumTrackTintColor="#93A8B3"
                    onValueChange={(seconds) => changeTime(seconds)}
                />
                <View style={styles.inprogress}>
                    <Text style={[styles.textLight, styles.timeStamp]}>
                        {!inprogress
                            ? timeElapsed
                            : audioRecorderPlayer.mmssss(Math.floor(timeElapsed))}
                    </Text>
                    <Text style={[styles.textLight, styles.timeStamp]}>
                        {!inprogress
                            ? duration
                            : audioRecorderPlayer.mmssss(Math.floor(duration))}
                    </Text>
                </View>
            </View> */}

            {/* <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => onBackward()}>
                    <FontAwesome name="backward" size={32} color="#93A8B3" />
                </TouchableOpacity>
                {!isAlreadyPlay ? (
                    <PlayButton function={() => onStartPress("play")} state="play" />
                ) : (
                    <PlayButton function={() => onPausePress("pause")} state="pause" />
                )}
                <TouchableOpacity onPress={() => onForward()}>
                    <FontAwesome name="forward" size={32} color="#93A8B3" />
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    );
};

export default MacScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEC',
    },
    textLight: {
        color: '#B6B7BF',
    },
    text: {
        color: '#8E97A6',
    },
    titleContainer: { alignItems: 'center', marginTop: 24 },
    textDark: {
        color: '#3D425C',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    coverContainer: {
        marginTop: 32,
        width: 250,
        height: 250,
        shadowColor: '#5D3F6A',
        // shadowOffset: { height: 15 },
        shadowRadius: 8,
        shadowOpacity: 0.3,
    },
    cover: {
        width: 250,
        height: 250,
        borderRadius: 125,
    },
    track: {
        height: 2,
        borderRadius: 1,
        backgroundColor: '#FFF',
    },
    thumb: {
        width: 8,
        height: 8,
        backgroundColor: '#3D425C',
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: '500',
    },
    seekbar: { margin: 32 },
    inprogress: {
        marginTop: -12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    trackname: { alignItems: 'center', marginTop: 32 },
});