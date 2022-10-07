import React from 'react';
import { addMethod, subMethod } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { selectNumber } from './redux/Selector';

const CounterApp = () => {
    const dispatch = useDispatch();

    const number = useSelector(selectNumber);

    const handleAddSubmit = () => {
        dispatch(addMethod());
        console.log(addMethod().type);
    };

    const handleSubSubmit = () => {
        dispatch(subMethod());
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={handleAddSubmit} >
                    <Text style={{ fontSize: 20 }}> Increase </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, marginHorizontal: 30 }
                }> {number} </Text>
                < TouchableOpacity onPress={handleSubSubmit} >
                    <Text style={{ fontSize: 20 }}> Decrease </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default CounterApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});                               