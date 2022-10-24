import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    PermissionsAndroid,
    Button,
    Alert,
    ScrollView,
    StatusBar,
    Dimensions,
} from 'react-native';
import {
    CameraOptions,
    ImageLibraryOptions,
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import UploadScreen from './src/screens/UploadScreen';


const App = () => {
    // const { height, width } = Dimensions.get('screen');
    // console.log(height, width);
    GoogleSignin.configure({
        webClientId:
            '1072095487828-m7panf3uan4gtej7s0ft4jcmc51i3vrr.apps.googleusercontent.com',
    });

    const signInWithGoogleAsync = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        // return auth().signInWithCredential(googleCredential);
        const user_sign_in = auth().signInWithCredential(googleCredential);
        user_sign_in
            .then(user => {
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const signOutWithGoogleAsync = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        } catch (error) {
            console.log(error);
        }

    };

    //----------------------------------------------------------------

    const [filePath, setFilePath] = useState({});
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else {
            return true;
        }
    };
    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                Alert.alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const captureImage = async (type: any) => {
        let options: CameraOptions = {
            mediaType: type,
            maxWidth: 1920,
            maxHeight: 1080,
            quality: 1,
            videoQuality: 'high',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
            // includeBase64: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response: any) => {
                console.log('Response = ', response);

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
                // console.log('base64 -> ', response.base64);
                console.log('uri -> ', response.assets[0].uri);
                console.log('width -> ', response.assets[0].width);
                console.log('height -> ', response.assets[0].height);
                console.log('fileSize -> ', response.assets[0].fileSize);
                console.log('type -> ', response.assets[0].type);
                console.log('fileName -> ', response.assets[0].fileName);
                setFilePath(response);
            });
        }
    };
    const chooseFile = (type: any) => {
        let options: ImageLibraryOptions = {
            mediaType: type,
            maxWidth: 1920,
            maxHeight: 1080,
            quality: 1,
        };
        launchImageLibrary(options, (response: any) => {
            console.log('Response = ', response);

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
            setFilePath(response);
        });
    };

    //----------------------------------------------------------------
    const imageView = () => {
        if (Object.keys(filePath).length !== 0) {
            console.log('Co du lieu moi in', filePath);
            return (
                <View>
                    <Image
                        source={{ uri: filePath.assets[0].uri }}
                        style={styles.imageStyle}
                    />
                    <Text style={styles.textStyle}>{filePath.assets[0].uri}</Text>
                </View>
            );
        }
    };

    return (
        <SafeAreaView >
            <ScrollView >
                <StatusBar barStyle="dark-content" />

                <UploadScreen />

                <Text style={styles.titleText}>
                    Example of Image Picker in React Native
                </Text>
                <View style={styles.container}>
                    <View>
                        {imageView()}

                    </View>
                    {/* <Image
                        source={{ uri: filePath }}
                        style={styles.imageStyle}
                    />
                    <Text style={styles.textStyle}>{filePath}</Text> */}

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={() => captureImage('photo')}>
                        <Text style={styles.textStyle}>
                            Launch Camera for Image
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={() => captureImage('video')}>
                        <Text style={styles.textStyle}>
                            Launch Camera for Video
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={() => chooseFile('photo')}>
                        <Text style={styles.textStyle}>Choose Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={() => chooseFile('video')}>
                        <Text style={styles.textStyle}>Choose Video</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                    <Text> Hello world here ok men</Text>
                    <Button title="Google Sign-In" onPress={signInWithGoogleAsync} />
                    <Button title="Google Sign-Out" onPress={signOutWithGoogleAsync} />

                    <GoogleSigninButton
                        style={{ width: 250, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={signInWithGoogleAsync}
                    />
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 5,
        marginVertical: 10,
        width: 250,
    },
    imageStyle: {
        width: 350,
        height: 350,
        margin: 5,
        resizeMode: 'cover', //enum('cover', 'contain', 'stretch', 'repeat', 'center')
    },
});