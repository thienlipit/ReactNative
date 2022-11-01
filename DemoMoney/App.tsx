import React, { type PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

let Client_id = "ATF4_g3ws6_bXVmUwXqDEl_l2UYiH04MFIzZSARdDlUk0Yw0T8-6jDwDiOV1dcHM61IUhrHrrKSuH3-E";


const App = () => {
    return (
        <SafeAreaView style={styles.sectionContainer}>
            <Text>Hello world</Text>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 5,
        paddingHorizontal: 12,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
