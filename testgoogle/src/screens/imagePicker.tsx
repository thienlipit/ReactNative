import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Alert,
    Image
} from 'react-native';
import {
    CameraOptions,
    ImageLibraryOptions,
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
// import * as Progress from 'react-native-progress';

const ImagePicker = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const selectImage = () => {
        let options: ImageLibraryOptions = {
            mediaType: 'mixed',
        };
        launchImageLibrary(options, async (response: any) => {
            // console.log('Response = ', response);
            if (response.didCancel) {
                Alert.alert('User cancelled camera picker');
                return;
            } else if (response.errorCode === 'camera_unavailable') {
                Alert.alert('Camera not available on device');
                return;
            } else if (response.errorCode === 'permission') {
                Alert.alert('Permission not satisfied');
                return;
            } else if (response.errorCode === 'others') {
                Alert.alert(response.errorMessage);
                return;
            }
            // console.log('base64 -> ', response.assets[0].base64);
            console.log('uri -> ', response.assets[0].uri);
            console.log('width -> ', response.assets[0].width);
            console.log('height -> ', response.assets[0].height);
            console.log('fileSize -> ', response.assets[0].fileSize);
            console.log('type -> ', response.assets[0].type);
            console.log('fileName -> ', response.assets[0].fileName);
            // setFilePath(response);
            const source: any = { uri: response.assets[0].uri };
            console.log('Print URI: ', source);

            const fileName = response.assets[0].uri.split('/').pop();
            const fileType = fileName.split('.').pop();
            console.log(fileName, fileType);

            setImage(source);

            console.log('--------------------------------------------------------');

        });
    };

    const uploadImage = async () => {
        const { uri }: any = image;
        console.log('Image content: ', image);
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        console.log('Print Name: ', filename);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        console.log('Print Name: ', uploadUri);

        setUploading(true);
        setTransferred(0);
        const task = storage()
            .ref('chuot.jpg')
            .putFile('content://com.android.providers.media.documents/document/image%3A45');
        // set progress state
        task.on('state_changed', snapshot => {
            setTransferred(
                Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
            );
        });
        try {
            await task;
        } catch (e) {
            console.error(e);
        }
        setUploading(false);
        Alert.alert(
            'Photo uploaded!',
            'Your photo has been uploaded to Firebase Cloud Storage!'
        );
        setImage(null);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
                <Text style={styles.buttonText}>Pick an image</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                {image !== null ? (
                    <Image source={{ uri: image.uri }} style={styles.imageBox} />
                ) : null}
                {uploading ? (
                    <View style={styles.progressBarContainer}>
                        {/* <Progress.Bar progress={transferred} width={300} /> */}
                    </View>
                ) : (
                    <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
                        <Text style={styles.buttonText}>Upload image</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};

export default ImagePicker;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bbded6',

    },
    selectButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#8ac6d1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#ffb6b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageContainer: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'
    },
    progressBarContainer: {
        marginTop: 20
    },
    imageBox: {
        width: 300,
        height: 300
    }
});