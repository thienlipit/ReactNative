import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, StyleSheet, Image, Switch, Pressable, Alert, TouchableOpacity, Platform,
    PermissionsAndroid, TextProps } from 'react-native';
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';
import Geolocation from 'react-native-geolocation-service';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import RBSheet from "react-native-raw-bottom-sheet";
import {
    launchCamera,
    launchImageLibrary
  } from 'react-native-image-picker';
import PickImage from './pickImage';  
 
const logger = createLogger({
  // ...options
});
 
// const store = createStore(
// //   reducer,
//   applyMiddleware(logger)
// );

const HomeScreen = ({ navigation }: any) => {
   
    let latitude: number;
    let longitude: number;
    var temp
    var wind
    
    const [weather, setWeather] = useState<number | null>(0);
    const [location, setLocation] = useState('');
    const [weatherStatus, setWeatherStatus] = useState('');
  
    useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            getWeather({
                key: "fd6437e8fb0b4665c9fc986e4321f785",
                lat: latitude,
                lon: longitude,
                unit: "metric"   
            }).then(() => {
    
                var data = new showWeather();
                temp = data.temp;
                wind = data.wind;
                // console.log('Weather',data)
                setWeather(data.temp)
                setLocation(data.country+', ' + data.name)
                setWeatherStatus(data.description)
            });
            },
            (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
            },
            { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    function renderElement() {
        if (weatherStatus == 'few clouds')
            return (<Image
                style={styles.weatherIcon}
                source={require('../../assets/weather.png')} />)
        if (weatherStatus == 'moderate rain'|| weatherStatus == 'heavy intensity rain' || weatherStatus == 'light rain')
            return (<Image
                style={styles.weatherIcon}
                source={require('../../assets/rainy.png')} />);
        if (weatherStatus == 'overcast clouds' || weatherStatus == 'broken clouds'|| weatherStatus == 'scattered clouds')
            return (<Image
                style={styles.weatherIcon}
                source={require('../../assets/cloud.png')} />);
        else return (<Image
                style={styles.weatherIcon}
                source={require('../../assets/sun.png')} />);
    }


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabledTV, setIsEnabledTV] = useState(false);
    const toggleSwitchTV = () => setIsEnabledTV(previousState => !previousState);

    const [isEnabledAC, setIsEnabledAC] = useState(false);
    const toggleSwitchAC = () => setIsEnabledAC(previousState => !previousState);

    const [isEnabledRoute, setIsEnabledRoute] = useState(false);
    const toggleSwitchRoute = () => setIsEnabledRoute(previousState => !previousState);

    const [date, setDate] = useState('');
    useEffect(() => {
        let today = new Date();
        let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        setDate(date);
    }, []);

    const refRBSheet = useRef();
    const [filePath, setFilePath] = useState(null);
    console.log("File Path init: ", filePath)

    function renderProfile() {
        if (filePath != null)
            return (<Image
                style={styles.rightContainer}
                source={{uri: filePath.uri}} />)
       
        else return (<Image
                style={styles.rightContainer}
                source={require('../../assets/profile.png')} />);
    }

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
        } else return true;
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

    const captureImage = async (type) => {
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
          saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
          launchCamera(options, (response) => {
            console.log('Response = ', response);
    
            if (response.didCancel) {
              Alert.alert('User cancelled camera picker');
              return;
            } else if (response.errorCode == 'camera_unavailable') {
                Alert.alert('Camera not available on device');
              return;
            } else if (response.errorCode == 'permission') {
                Alert.alert('Permission not satisfied');
              return;
            } else if (response.errorCode == 'others') {
                Alert.alert(response.errorMessage);
              return;
            }
            setFilePath(response.assets[0]);
          });
        }
      };

    const chooseFile = (type: any) => {
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
        };
        launchImageLibrary(options , (response) => {
          console.log('Response = ', response);
          console.log("Content here:", JSON.stringify(response.assets[0].uri));
    
          if (response.didCancel) {
            Alert.alert('User cancelled camera picker');
            return;
          } else if (response.errorCode == 'camera_unavailable') {
            Alert.alert('Camera not available on device');
            return;
          } else if (response.errorCode == 'permission') {
            Alert.alert('Permission not satisfied');
            return;
          } else if (response.errorCode == 'others') {
            Alert.alert(response.errorMessage);
            return;
          }
          setFilePath(response.assets[0]);
        });
      };

    return (
        <View style={styles.container}>

            <View style={styles.imgHeader}>
                <View style={styles.leftContainer}>
                    <Image
                        style={styles.leftContainer}
                        source={require('../../assets/menu.png')} />
                </View>
                <View style={{ flex: 1 }} />
                <View style={styles.rightContainer}>
                    {PickImage()}
                    {/* <Pressable
                        onPress={() => refRBSheet.current.open()}
                    >
                       
                    {renderProfile()}

                    </Pressable>
                    <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "transparent"
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                        }}>
                    
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.buttonStyle}
                                onPress={() => chooseFile('photo')}>
                                <Text style={styles.textStyle}>Choose Image</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.buttonStyle}
                                onPress={() => captureImage('photo')}>
                                <Text style={styles.textStyle}>Capture Image</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </RBSheet> */}
                    
                </View>

            </View>

            <View style={{ flexDirection: 'column', marginStart: 15, flex: 0.15 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#25354b' }}>Welcome, Fauzan</Text>
                <Text style={{ color: '#969ea8' }}>Manage your home</Text>
            </View>

            <View style={{ flex: 0.25 }}>
                <View style={{
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    height: '90%',
                    backgroundColor: '#fff',
                    borderRadius: 16,
                    justifyContent: 'center',
                }}>
                    <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 15 }}>{date}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#25354b', marginLeft: 15, textTransform: 'capitalize' }}>{weatherStatus } '/' {weather}'°C'</Text>
                        <Text style={{ marginLeft: 15 }}>{location}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {renderElement() }
                    </View>
                </View>
            </View>

            <View style={{ flex: 0.7, flexDirection: 'column' }}>
                <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#25354b' }}>Living Room</Text>
                    <Text style={{}}>Bedroom</Text>
                    <Text style={{}}>Dining Room</Text>
                    <Text style={{}}>Kitchen</Text>
                </View>

                <View style={{ marginHorizontal: 15, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View style={[styles.box, styles.box2,]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginHorizontal: 5 }}>
                            <Image
                                style={styles.leftContainer}
                                source={require('../../assets/bulb.png')} />
                            <Switch
                                trackColor={{ false: "#767577", true: "#f95f5e" }}
                                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#25354b', }}>Smart Lamp</Text>
                            <Text style={{ fontSize: 16, color: '#25354b' }}>Philips</Text>

                        </View>



                    </View>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box, styles.box3]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginHorizontal: 5 }}>
                            <Image
                                style={styles.leftContainer}
                                source={require('../../assets/tv.png')} />
                            <Switch
                                trackColor={{ false: "#767577", true: "#f95f5e" }}
                                thumbColor={isEnabledTV ? "#fff" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchTV}
                                value={isEnabledTV}
                            />
                        </View>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#25354b', }}>Smart TV</Text>
                            <Text style={{ fontSize: 16, color: '#25354b' }}>LG</Text>

                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 15, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View style={[styles.box, styles.box2]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginHorizontal: 5 }}>
                            <Image
                                style={styles.leftContainer}
                                source={require('../../assets/air-conditioner.png')} />
                            <Switch
                                trackColor={{ false: "#767577", true: "#f95f5e" }}
                                thumbColor={isEnabledAC ? "#fff" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchAC}
                                value={isEnabledAC}
                            />
                        </View>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#25354b', }}>Panasadem AC</Text>
                            <Text style={{ fontSize: 16, color: '#25354b' }}>Panasonic</Text>

                        </View>
                    </View>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box, styles.box3]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginHorizontal: 5 }}>
                            <Image
                                style={styles.leftContainer}
                                source={require('../../assets/wifi-router.png')} />
                            <Switch
                                trackColor={{ false: "#767577", true: "#f95f5e" }}
                                thumbColor={isEnabledRoute ? "#fff" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchRoute}
                                value={isEnabledRoute}
                            />
                        </View>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#25354b', }}>Indinet Route</Text>
                            <Text style={{ fontSize: 16, color: '#25354b' }}>Philips</Text>

                        </View>
                    </View>
                </View>

            </View>

        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f8fa',
        justifyContent: 'space-between'
    },
    imgHeader: {
        flex: 0.15,
        height: 200,
        flexDirection: 'row',
        marginTop: 20,

    },
    leftContainer: {
        height: 40,
        width: 40,
        marginStart: 10,
        resizeMode: 'contain',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rightContainer: {
        height: 60,
        width: 60,
        marginEnd: 10,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'red',
        borderRadius: 50 / 2
    },
    weatherIcon: {
        height: 120,
        width: 120,
        marginEnd: 10,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    box: {
        flex: 0.05,
        backgroundColor: '#f6f8fa',

    },
    box2: {
        flex: 0.475,
        backgroundColor: 'white',
        borderRadius: 50 / 2,
        height: 170
    },
    box3: {
        flex: 0.475,
        backgroundColor: 'white',
        borderRadius: 50 / 2,
        height: 170
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
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
})