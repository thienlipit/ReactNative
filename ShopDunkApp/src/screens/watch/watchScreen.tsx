import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';
import TrackPlayer from 'react-native-track-player';
// import VideoPlayer from 'react-native-video-player';

const WatchScreen = ({ navigation }: any) => {
    const Play = async () => {

    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'red' }}>watchScreen</Text>

            <Button title='Watch screen move to Home screen' onPress={() => navigation.navigate('Iphone')} />



        </View>
    );
};

export default WatchScreen;

{/* <VideoPlayer
    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
    videoWidth={1600}
    videoHeight={900}
    thumbnail={{ uri: 'https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-dep-nhat-the-gioi-ve-thien-nhien_041753462.jpg' }}
/> */}