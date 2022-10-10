import React from 'react';
import { TouchableOpacity, Dimensions, Alert, Image, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { dataIphone } from '../../assets/dataIphone';
import DetailPhone from './detailIphone';
import { colors } from '../../assets/colors/color';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;


const Item = ({ name, price, image }: any) => (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => DetailPhone({ name, price })}>
            <Image style={styles.tinyLogo} source={{ uri: image }} />
            <Text style={styles.titleName}>{name}</Text>
            <Text style={styles.titlePrice}>{price}</Text>
        </TouchableOpacity>


    </View>
);



const IphoneScreen = ({ navigation }: any) => {
    const renderItem = ({ item }: any) => (
        <Item name={item.name} price={item.price} image={item.image} />

    );

    return (


        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                data={dataIphone}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </SafeAreaView>

    );
};

export default IphoneScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgoundColor,
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        height: windowHeight / 4.8,
        width: windowWidth / 2.18,
        borderRadius: 12,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleName: {
        fontSize: 14,
        alignSelf: 'center',
        color: colors.textBlackColor,
        fontWeight: 'bold',
    },
    titlePrice: {
        fontSize: 14,
        alignSelf: 'center',
        color: colors.textBlueColor,
    },
    tinyLogo: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
});
