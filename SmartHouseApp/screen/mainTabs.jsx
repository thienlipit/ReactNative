import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CountDown from 'react-native-countdown-component'
// import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../components/smartHome/homeScreen'
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';

const Tab = createBottomTabNavigator();



function SettingsScreen({navigation}) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{marginBottom: 10}}>Settings screen</Text>
            <Button title='Move to Home' onPress={() => navigation.navigate('HomePage')} />
            
            <FontAwesome
                style={styles.iconStyle}
        //   icon={RegularIcons.addressBook}
                icon={SolidIcons.smile}
            />

        {/* <FontAwesome icon={SolidIcons.smile} /> */}

        {/* <CountDown
          until={5}
          //duration of countdown in seconds
          timetoShow={('H', 'M', 'S')}
          //formate to show
          onFinish={() => alert('finished')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        /> */}
        </View>
    );
}

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

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 40,
        marginTop: 30,
        color: 'black',
      },
} 
)