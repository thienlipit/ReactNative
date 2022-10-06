import React, { useState } from "react";
import {addMethod, subMethod} from './actions'
import {useDispatch} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";


const CounterApp = () =>  {

    const dispatch = useDispatch();

    const handleAddSubmit = () => {
        dispatch(addMethod);
        console.log(dispatch(addMethod))
      };

    const handleSubSubmit = () => {
        dispatch(subMethod);
        console.log(dispatch(subMethod))
      };

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={handleAddSubmit} >
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginHorizontal: 30 }}> </Text>
                    <TouchableOpacity onPress={handleSubSubmit} >
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    
}

export default CounterApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});