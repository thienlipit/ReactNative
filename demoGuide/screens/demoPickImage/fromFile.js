import React, { useState } from 'react';
import {
    launchCamera,
    launchImageLibrary,
    showImagePicker
} from 'react-native-image-picker';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { replace } from 'formik';
import { height } from 'react-native-utils-scale';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
const App11 = () => {
    const [choose, setChoose] = useState(false)
    const [filePath, setFilePath] = useState({});


    const chooseImage = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                console.log('response', JSON.stringify(response));
                setFilePath(response.assets[0])
                setChoose(true)

         
            }
        });
    }

    const camera = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        launchCamera(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = { uri: response.uri };
            console.log('response', JSON.stringify(response));
            setFilePath(response.assets[0])
            setChoose(true)
          }
        });

    }



    const RenderFileUri = ({ uri, desiredWidth }) => {
        console.log('Render', filePath.uri)
        const [desiredHeight, setDesiredHeight] = React.useState(0)
        Image.getSize(uri, (width, height) => {
            setDesiredHeight(desiredWidth / width * height)
        })
        if (choose == false) {
            return <View>
                <Image
                    source={{ uri: 'https://vietjet.net/includes/uploads/2016/01/thang-tu-ve-thien-nhien-quyen-ru-dieu-ky2.jpg' }}
                    style={{
                        borderWidth: 1,
                        width: desiredWidth,
                        height: 200,
                        marginHorizontal: 5
                    }}
                />
            </View>

        }
        else {
            return <View>
                <Image
                    source={{ uri }}
                    style={{
                        borderWidth: 1,
                        width: desiredWidth,
                        height: desiredHeight,
                        marginHorizontal: 5
                    }}
                />
                <Text>{filePath.uri}</Text>
            </View>
        }
    }

    return (
        <SafeAreaView style={{ flex: 100 }}>
            <Text style={styles.titleText}>
                Example of Image Picker in React Native
            </Text>
            <View style={{ flex: 80 }}>
                <RenderFileUri
                    uri={filePath.uri}
                    desiredWidth={401}
                />

            </View>
 
            <View style={{ flex: 20 }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnSection}
                    onPress={chooseImage} >
                    <Text style={styles.btnText}>Choose File </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={camera} 
                    style={styles.btnSection}  >
                    <Text style={styles.btnText}>Directly Launch Camera</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>

    );

};

export default App11;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },

    //   body: {
    //     backgroundColor: Colors.white,
    //     justifyContent: 'center',
    //     borderColor: 'black',
    //     borderWidth: 1,
    //     height: Dimensions.get('screen').height - 20,
    //     width: Dimensions.get('screen').width
    //   },
    ImageSections: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 8,
        justifyContent: 'center'
    },
    images: {

        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 30
    },
    btnParentSection: {
        alignItems: 'center',
        marginTop: 10
    },
    btnSection: {
        position: 'relative',
        height: '30%',
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom: 10,
        
    },
    btnText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
        fontWeight: 'bold'
    }
});