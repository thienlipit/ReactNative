import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IphoneScreen from '../screens/iphone/iphoneScreen';
import IpadScreen from '../screens/ipad/ipadScreen';
import MacScreen from '../screens/mac/macScreen';
import WatchScreen from '../screens/watch/watchScreen';
import SoundScreen from '../screens/sound/soundScreen';


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
            <Tab.Screen name="Iphone" component={IphoneScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/smartphone.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }} />

                            <Text style={{
                                fontSize: 12,
                                color: focused ? '#e32f45' : '#748c94',
                            }}>Iphone</Text>
                        </View>
                    ),

                }}
            />

            <Tab.Screen name="Ipad" component={IpadScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/ipad.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }} />

                            <Text style={{
                                fontSize: 12,
                                color: focused ? '#e32f45' : '#748c94',
                            }}>Ipad</Text>
                        </View>
                    ),

                }}
            />

            <Tab.Screen name="Mac" component={MacScreen}
                options={{
                    // tabBarBadge: 1,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/laptop.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }} />

                            <Text style={{
                                fontSize: 12,
                                color: focused ? '#e32f45' : '#748c94',
                            }}>Mac</Text>
                        </View>
                    ),

                }}
            />

            <Tab.Screen name="Watch" component={WatchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/watch.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }} />
                            <Text style={{
                                fontSize: 12,
                                color: focused ? '#e32f45' : '#748c94',
                            }}>Watch</Text>
                        </View>
                    ),

                }}
            />

            <Tab.Screen name="Sound" component={SoundScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/airpods.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }} />
                            <Text style={{
                                fontSize: 12,
                                color: focused ? '#e32f45' : '#748c94',
                            }}>Sound</Text>
                        </View>
                    ),

                }}
            />

        </Tab.Navigator>
    );
};

export default function MyApp() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}