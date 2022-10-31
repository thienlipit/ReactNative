import React, { useState } from 'react';
import { Text, View, Image, Button, StyleSheet, ImageBackground, Platform, PermissionsAndroid, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'rn-fetch-blob';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import PlayButton from './PlayButton';
import Slider from '@react-native-community/slider';

const audioRecorderPlayer = new AudioRecorderPlayer();
const dirs = RNFetchBlob.fs.dirs;

const playlist = [
    {
        title: 'Emergence of Talents',
        path: 'sample6s.mp3',
        cover:
            'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
    },
    {
        title: 'Shippuden',
        path: 'sample9s.mp3',
        cover:
            'https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
    },
    {
        title: 'Rising Dragon',
        path: 'sample6s.mp3',
        cover:
            'https://images.unsplash.com/photo-1512036666432-2181c1f26420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    },
    {
        title: 'Risking it all',
        path: 'sample9s.mp3',
        cover:
            'https://images.unsplash.com/photo-1501761095094-94d36f57edbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80',
    },
    {
        title: 'Gekiha',
        path: 'sample6s.mp3',
        cover:
            'https://images.unsplash.com/photo-1471400974796-1c823d00a96f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    },
];

const SoundScreen = ({ navigation }: any) => {
    const [isAlreadyPlay, setisAlreadyPlay] = useState(false);
    const [duration, setDuration] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [percent, setPercent] = useState(0);
    const [current_track, setCurrentTrack] = useState(0);
    const [inprogress, setInprogress] = useState(false);
    // const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());

    // const path = Platform.select({
    //     ios: 'hello.m4a',
    //     android: `${dirs.MusicDir}/${playlist[current_track].path}`,
    // });

    const changeTime = async (seconds: any) => {
        // 50 / duration
        let seektime = (seconds / 100) * duration;
        setTimeElapsed(seektime);
        audioRecorderPlayer.seekToPlayer(seektime);
    };

    const onStartPress = async () => {
        if (Platform.OS === 'android') {
            try {
                const grants = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                ]);

                console.log('write external stroage', grants);

                if (
                    grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                    grants['android.permission.READ_EXTERNAL_STORAGE'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                    grants['android.permission.RECORD_AUDIO'] ===
                    PermissionsAndroid.RESULTS.GRANTED
                ) {
                    console.log('Permissions granted');
                } else {
                    console.log('All required permissions not granted');
                    return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
        }
        setisAlreadyPlay(true);
        setInprogress(true);
        // const path = 'file://' + dirs + '/' + playlist[current_track].path;
        const path = Platform.select({
            ios: 'hello.m4a',
            android: `${dirs.MusicDir}/${playlist[current_track].path}`,
        });
        audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.startPlayer(path);
        // audioRecorderPlayer.setVolume(1.0);

        audioRecorderPlayer.addPlayBackListener(async (e: any) => {
            if (e.currentPosition === e.duration) {
                audioRecorderPlayer.stopPlayer();
            }
            let percent1 = Math.round(
                (Math.floor(e.currentPosition) / Math.floor(e.duration)) * 100,
            );
            setTimeElapsed(e.currentPosition);
            setPercent(percent1);
            setDuration(e.duration);
        });
    };

    const onPausePress = async () => {
        setisAlreadyPlay(false);
        audioRecorderPlayer.pausePlayer();
    };

    const onStopPress = async () => {
        await audioRecorderPlayer.stopPlayer();
        await audioRecorderPlayer.removePlayBackListener();
    };

    const onForward = async () => {
        let curr_track1 = playlist[current_track];
        let current_index = playlist.indexOf(curr_track1) + 1;
        if (current_index === playlist.length) {
            setCurrentTrack(1);
        } else {
            setCurrentTrack(current_track + 1);
        }
        // onStopPress().then(async () => {
        //     await onStartPress();
        // });
    };

    const onBackward = async () => {
        let curr_track1 = playlist[current_track];

        let current_index = playlist.indexOf(curr_track1);

        if (current_index === 0) {
            setCurrentTrack(5);
        } else {
            setCurrentTrack(current_track - 1);
        }
        // onStopPress().then(async () => {
        //     await onStartPress();
        // });
    };

    // const [state, setState] = useState({});
    // const onStartPlay = async () => {
    //     if (Platform.OS === 'android') {
    //         try {
    //             const grants = await PermissionsAndroid.requestMultiple([
    //                 PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //                 PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    //                 PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    //             ]);

    //             console.log('write external stroage', grants);

    //             if (
    //                 grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
    //                 PermissionsAndroid.RESULTS.GRANTED &&
    //                 grants['android.permission.READ_EXTERNAL_STORAGE'] ===
    //                 PermissionsAndroid.RESULTS.GRANTED &&
    //                 grants['android.permission.RECORD_AUDIO'] ===
    //                 PermissionsAndroid.RESULTS.GRANTED
    //             ) {
    //                 console.log('Permissions granted');
    //             } else {
    //                 console.log('All required permissions not granted');
    //                 return;
    //             }
    //         } catch (err) {
    //             console.warn(err);
    //             return;
    //         }
    //     }
    //     console.log('onStartPlay');
    //     const msg = await audioRecorderPlayer.startPlayer(path);
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

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.textLight, { fontSize: 12 }]}>PLAYLIST</Text>
                    <Text style={styles.text}>Instaplayer</Text>
                </View>
                <View style={styles.coverContainer}>
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
                </View>
            </View>
            <View style={styles.seekbar}>
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    // trackStyle={styles.track}
                    // thumbStyle={styles.thumb}
                    value={percent}
                    minimumTrackTintColor="#93A8B3"
                // onValueChange={(seconds: any) => changeTime(seconds)}
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
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => onBackward()}>
                    <FontAwesome name="backward" size={32} color="#93A8B3" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.playButtonContainer}
                    onPress={() => onStartPress()}>
                    <FontAwesome name="play" size={32} color="#3D425C" />
                </TouchableOpacity>

                {/* {!isAlreadyPlay ? (
                    <PlayButton function={() => onStartPress()} state="play" />
                ) : (
                    <PlayButton function={() => onPausePress()} state="pause" />
                )} */}
                <TouchableOpacity onPress={() => onForward()}>
                    <FontAwesome name="forward" size={32} color="#93A8B3" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>


    );
};

export default SoundScreen;

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
    playButtonContainer: {
        backgroundColor: '#FFF',
        borderColor: 'rgba(93, 63, 106, 0.2)',
        borderWidth: 16,
        width: 128,
        height: 128,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 32,
        shadowColor: '#5D3F6A',
        shadowRadius: 30,
        shadowOpacity: 0.5,
    },
});