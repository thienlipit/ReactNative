import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

const HomeScreen = ({navigation}) => {
    return ( <View style={styles.container}>

        <View style={styles.imgHeader}>
            <View style={styles.leftContainer}>
                <Image
                    style={styles.leftContainer} 
                    source={require('../../assets/bell-solid.png')} />
            </View>
            <View style={{flex: 1}} />
            <View style={styles.rightContainer}>
                <Image
                    style={styles.rightContainer} 
                    source={require('../../assets/profile.png')}
                    /> 
            </View>
                
                          
        </View>
            

        </View>
    )
    
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f8fa'
    },
    imgHeader: {
        flex: 1,
        height: 200,
        flexDirection: 'row',
        marginTop: 20,

    },
    leftContainer: {
        height: 50,
        width: 50,
        marginStart: 10,
        resizeMode: 'contain',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'green'
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
})