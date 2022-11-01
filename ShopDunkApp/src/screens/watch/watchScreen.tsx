import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';
import Greeting from '../../components/Text';

const WatchScreen = ({ navigation }: any) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Greeting name="tran minh thien" uri='https://reactjs.org/logo-og.png' uri2='https://aphoto.vn/wp-content/uploads/2016/07/cach-chup-hinh-dep-bang-dien-thoai.jpg' />
            <Text style={{ fontSize: 20, color: 'red' }}>watchScreen</Text>

            <Button title='Watch screen move to Home screen' onPress={() => navigation.navigate('Iphone')} />

        </View>
    );
};

export default WatchScreen;