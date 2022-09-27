import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/smartHome/homeScreen'
import SettingsScreen from '../components/smartHome/settingScreen'
import WeatherScreen from '../components/smartHome/weatherScreen'
import NotificationScreen from '../components/smartHome/notificationScreen'


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                headerStyle: { backgroundColor: '#fff' },
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 55,
                },


            }} >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                source={require('../assets/house.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }} />

                            <Text style={{
                                fontSize: 12,
                                color: focused ? '#e32f45' : '#748c94',
                            }}>Home</Text>
                        </View>
                    ),

                }}
            />

            <Tab.Screen name="Weather" component={WeatherScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                source={require('../assets/bolt-solid.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }} />

                            <Text style={{
                                fontSize: 12,
                                color: focused ? '#e32f45' : '#748c94',
                            }}>Weather</Text>
                        </View>
                    ),

                }}
            />

            <Tab.Screen name="Notification" component={NotificationScreen}
                options={{
                    tabBarBadge: 1,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                source={require('../assets/bell-solid.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }} />

                            <Text style={{
                                fontSize: 12,
                                color: focused ? '#e32f45' : '#748c94',
                            }}>Notification</Text>
                        </View>
                    ),

                }}
            />

            <Tab.Screen name="Setting" component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                source={require('../assets/gear-solid.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }} />
                            <Text style={{
                                fontSize: 12,
                                color: focused ? '#e32f45' : '#748c94',
                            }}>Setting</Text>
                        </View>
                    ),

                }}
            />

        </Tab.Navigator>
    )
}

export default function Tabs() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}