import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Keyboard,
    Platform
} from 'react-native'
import { images, icons, color, fontSizes } from '../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {isValidEmail, isValidPassword} from '../utilies/validations'

const register = (props: any)=> {
    return (
        <View>
            <Text>This is register view</Text>
        </View>
    )
}

export default register