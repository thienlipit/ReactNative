import React, { useState } from "react";
import {StyleSheet, View, TouchableOpacity, Text, Switch} from "react-native";

const touchAbleOpacity = () => {
    const [count, setCount] = useState(444);
    const onPressNext = () => setCount(prevCount => prevCount + 1);
    const onPressPre = () => setCount(prevCount => prevCount - 1);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text>Count: {count}</Text>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress= {onPressNext}>
                    <Text>Press next</Text>

            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress= {onPressPre}>
                    <Text>Press previous</Text>

            </TouchableOpacity>

            <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

        </View>


    )
};
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
 })

 export default touchAbleOpacity;