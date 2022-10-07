import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from './redux/selector';
import { incrementMethod, decrementMethod } from './redux/actions';

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const handleIncreaseSubmit = () => {
        dispatch(incrementMethod());
    };

    const handleDecreaseSubmit = () => {
        dispatch(decrementMethod());
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={handleIncreaseSubmit} >
                    <Text style={{ fontSize: 20 }}> ADD </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, marginHorizontal: 30 }
                }> {count} </Text>
                < TouchableOpacity onPress={handleDecreaseSubmit} >
                    <Text style={{ fontSize: 20 }}> SUB </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});