import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CountDown from 'react-native-countdown-component'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home'
import PickImage from '../screens/demoPickImage/pickImage'
import FromFile from '../screens/demoPickImage/fromFile'

const Tab = createBottomTabNavigator();


function SettingsScreen({navigation}) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{marginBottom: 10}}>Settings screen</Text>
            <Button title='Move to Home' onPress={() => navigation.navigate('HomePage')} />
            <View style={{marginVertical: 10}}>
                <Button title='Move to pick image' onPress={() => navigation.navigate('PickImage')} />   
            </View>
            
            <Button 
                title='Start'
                onPress={() => {
                    alert("finish")

                }}
            />

        <CountDown
          until={5}
          //duration of countdown in seconds
          timetoShow={('H', 'M', 'S')}
          //formate to show
          onFinish={() => alert('finished')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
        </View>
    );
}

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                headerStyle: { backgroundColor: 'papayawhip' },
                tabBarStyle: {
                    backgroundColor: 'papayawhip',
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                },


            }} >
            <Tab.Screen name="HomePage" component={Home}
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

                }} />
            <Tab.Screen name="Setting" component={SettingsScreen}
                options={{
                    tabBarBadge: 3,
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

                }} />

            <Tab.Screen name="PickImage" component={FromFile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                source={require('../assets/image-solid.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }} />
                            <Text style={{
                                fontSize: 12,
                                color: focused ? '#e32f45' : '#748c94',
                            }}>Image</Text>
                        </View>
                    ),

                }} />

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