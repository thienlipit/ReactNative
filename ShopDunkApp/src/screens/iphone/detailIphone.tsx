import * as React from 'react';
import { SafeAreaView, Text, View, Image, Button, StyleSheet, Dimensions, Animated, Modal, Alert } from 'react-native';
import { colors } from '../../assets/colors/color';
import Carosel from '../ipad/Carosel';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const dumyData = [
    {
        title: 'Anise Aroma Art Bazar', url: 'https://shopdunk.com/wp-content/uploads/2021/07/SEA_iPhone_11_B_3_3_11zon-692x692.webp?crop=1',
        description: 'Lorem IPsum is simply dummy text of the printing and typesettting industry.',
        id: 1,
    },
    {
        title: 'Food inside a Bowl', url: 'https://shopdunk.com/wp-content/uploads/2021/07/SEA_iPhone_11_B_4_4_11zon-692x692.webp?crop=1',
        description: 'Lorem IPsum is simply dummy text of the printing and typesettting industry.',
        id: 2,
    },
    {
        title: 'Vegetable Sald', url: 'https://shopdunk.com/wp-content/uploads/2021/07/SEA_iPhone_11_B_1_1_11zon-692x692.webp?crop=1',
        description: 'Lorem IPsum is simply dummy text of the printing and typesettting industry.',
        id: 3,
    },
    {
        title: 'Vegetable Sald', url: 'https://shopdunk.com/wp-content/uploads/2021/07/SEA_iPhone_11_B_7_5_11zon-692x692.webp?crop=1',
        description: 'Lorem IPsum is simply dummy text of the printing and typesettting industry.',
        id: 4,
    },
];

const DetailPhone = ({ name, price }: any) => {


    return (

        Alert.alert(name, price)
        // <Modal animationType="slide"
        //     transparent={true} >
        // <SafeAreaView style={styles.container}>



        // {/* <Carosel data={dumyData} /> */}

        // {/* <View>
        //     <Text> alaoala</Text>
        // </View> */}

        // </SafeAreaView>


    );
};

export default DetailPhone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgoundColor,
    },


});