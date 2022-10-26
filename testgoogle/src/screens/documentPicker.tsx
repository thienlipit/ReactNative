import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import ImageZoom from 'react-native-image-pan-zoom';
import SoundPlayer from 'react-native-sound-player';

const DocumentPickerEx = () => {
    const [imgResponse, setImgResponse] = useState<DocumentPickerResponse[] | undefined>();
    const openPicker = async () => {
        try {
            const response = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.allFiles],
                copyTo: 'cachesDirectory',
                allowMultiSelection: true,
            });
            setImgResponse(response);
            console.log(response.length);
            console.log(response);
            console.log(response[0].name);
            console.log(response[0].uri);

        } catch { }
    };
    const playMp3 = () => {
        try {
            // play the file tone.mp3
            SoundPlayer.playSoundFile('example', 'mp3');
            // or play from url
            // SoundPlayer.playUrl('https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_500KB_MP3.mp3');
        } catch (e) {
            console.log('cannot play the sound file', e);
        }
    };

    return (
        <View style={styles.constainer}>
            <Text style={{ color: 'red' }}>Play MP3 file</Text>
            <Button title='play' onPress={playMp3} />

            <Button title="Choose a file here" onPress={openPicker} />

            {imgResponse !== undefined ? (
                <View>
                    <ImageZoom cropWidth={300} cropHeight={300} imageWidth={300} imageHeight={300} >
                        <Image style={{ height: 300, width: 300, marginTop: 20 }} source={{ uri: imgResponse[0]?.uri }} />
                    </ImageZoom>

                    <Text style={{ color: '#fff' }}>{imgResponse[0].name}</Text>
                </View>
            ) : undefined}

        </View>
    );
};

const styles = StyleSheet.create({
    constainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        height: 500,
    },
});

export default DocumentPickerEx;