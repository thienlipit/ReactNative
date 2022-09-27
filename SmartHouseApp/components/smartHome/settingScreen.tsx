import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
} from 'react-native-fontawesome';

const SettingsScreen = ({navigation}) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginBottom: 10 }}>Settings screen</Text>
            {/* <Button title='Move to Home' onPress={() => navigation.navigate('Home')} /> */}
            <Button title='Move to home screen' onPress={() => navigation.navigate('Home')} />

            <FontAwesome
                style={styles.iconStyle}
                icon={RegularIcons.addressBook}
            // icon={SolidIcons.smile}
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

export default SettingsScreen;

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 22,
        marginTop: 5,
        color: '#e32f45',
        // tintColor: focused ? '#e32f45' : '#748c94',
    },
})