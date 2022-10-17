import React from 'react';
import { TouchableOpacity, Dimensions, Image, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { listDataIphone } from '../../assets/dataIphone/listPhone';
import { colors } from '../../assets/colors/color';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const IphoneScreen = ({ navigation }: any) => {
    const Item = ({ item }: any) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailIPhone', {
                name: item.name,
                price: item.price,
            })}>
                <Image style={styles.tinyLogo} source={{ uri: item.urlImage }} />
                <Text style={styles.titleName}>{item.name}</Text>
                <Text style={styles.titlePrice}>{item.price}</Text>
            </TouchableOpacity>

        </View>
    );

    const renderItem = ({ item }: any) => (
        <Item item={item} />

    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                data={listDataIphone}
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