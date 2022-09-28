import React, {useEffect, useState} from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';
import Geolocation from 'react-native-geolocation-service';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
} from 'react-native-fontawesome';

const SettingsScreen = ({navigation}) => {

    let latitude: Number;
    let longitude: Number;
    var temp
    var wind
    
    // const [weather, setWeather] = useState<Number | null>(0);
    // const [weather1, setWeather1] = useState<Number | null>(0);
    useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            console.log("GEO API", position);
            console.log("lat API", latitude);
            console.log("lon API", longitude);
            // setWeather(latitude)
            // setWeather1(longitude)
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
            });
            },
            (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
            },
            { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
        );
    }, []);



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginBottom: 10 }}>Settings screen</Text>
            <Button title='Move to home screen' onPress={() => navigation.navigate('Home')} />

            <FontAwesome
                style={styles.iconStyle}
                icon={RegularIcons.addressBook}
            />

        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 22,
        marginTop: 5,
        color: '#e32f45',
        // tintColor: focused ? '#e32f45' : '#748c94',
    },
})