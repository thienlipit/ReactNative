import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, Switch } from 'react-native';
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';
import Geolocation from 'react-native-geolocation-service';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

const HomeScreen = ({ navigation }) => {
    
    let latitude: number;
    let longitude: number;
    var temp
    var wind
    
    const [weather, setWeather] = useState<number | null>(0);
    const [location, setLocation] = useState('');
    const [weatherStatus, setWeatherStatus] = useState('');
    // const [weather1, setWeather1] = useState<Number | null>(0);
    useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            console.log("GEO API", position);
            console.log("lat API", latitude);
            console.log("lon API", longitude);
            getWeather({
                key: "fd6437e8fb0b4665c9fc986e4321f785",
                lat: latitude,
                lon: longitude,
                unit: "metric"   
            }).then(() => {
    
                var data = new showWeather();
                temp = data.temp;
                wind = data.wind;
                console.log('Weather',data)
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
        if (weatherStatus == 'broken clouds')
            return (<Image
                style={styles.weatherIcon}
                source={require('../../assets/weather.png')} />)
        if (weatherStatus == 'moderate rain'|| weatherStatus == 'heavy intensity rain')
            return (<Image
                style={styles.weatherIcon}
                source={require('../../assets/rainy.png')} />);
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
                    <Image
                        style={styles.rightContainer}
                        source={require('../../assets/profile.png')}
                    />
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

})