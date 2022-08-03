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

const Login = () => {
    const [keyboardIsShow, setKeyboardIsShow] = useState(false)
    
    //states for validating
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //states to store email/password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidationOk = () => {
        // if(isValidEmail(email) == true && isValidPassword(password) == true) {
        //     return true
        // }
        // return false

        return ((isValidEmail(email) == true && isValidPassword(password) == true)== true? true: false)
    }

    useEffect(()=>{
        Keyboard.addListener('keyboardDidShow', ()=>{
            setKeyboardIsShow(true)
        })

        Keyboard.addListener('keyboardDidHide', ()=>{
            setKeyboardIsShow(false)
        })
    })
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios"? "padding": "height"}
            style={{
            flex: 100,
            backgroundColor: 'white'
        }}>
            <View style={{
                flex: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                    fontWeight: 'bold',
                    width: '50%'
                }}>Already have an account?</Text>

                <Image
                    style={{
                        width: 100,
                        height: 100,
                        alignSelf: 'center',
                    }}
                    source={images.logoLogin} />

            </View>

            <View style={{
                flex: 35
            }}>
                <View style={{
                    marginHorizontal: 20,
                }}>
                    <Text style={{
                        fontSize: fontSizes.h5,
                        color: 'black'
                    }}>Email:</Text>

                    <TextInput
                        onChangeText={(text)=>{
                            setErrorEmail(isValidEmail(text)==true? '': 'Email wrong')
                            setEmail(text)
                        }}  
                        placeholder='abc@gmail.com'
                        placeholderTextColor={color.placeholder}
                    />
                    <View style={{
                        height:1, 
                        backgroundColor: 'black', 
                        width: '100%',
                        marginBottom: 5}} />
                    <Text style={{
                    color: 'red'
                }}>{errorEmail}</Text>
                </View>
                

                <View style={{
                    marginHorizontal: 20,
                }}>
                    <Text style={{
                        fontSize: fontSizes.h5,
                        color: 'black'
                    }}>Password:</Text>

                    <TextInput
                        onChangeText={(text)=>{
                            setErrorPassword(isValidPassword(text)== true? '': 'Password wrong')
                            setPassword(text)
                        }} 
                        secureTextEntry={true}
                        placeholder='Enter your password'
                        placeholderTextColor={color.placeholder}
                    />
                    <View style={{
                        height:1, 
                        backgroundColor: 'black', 
                        width: '100%',
                        marginBottom: 5}} />
                    <Text style={{
                    color: 'red'
                }}>{errorPassword}</Text>
                </View>
            </View>

            {keyboardIsShow == false && <View style={{
                flex: 20
            }}>
                <TouchableOpacity
                    disabled = {isValidationOk()== true? false: true}
                    onPress={() => {
                        Alert.alert(`Email: ${email}, Pwd: ${password}`)
                        // Alert.alert(`Pwd: ${errorPassword}`)
                    }}
                    style={{
                        backgroundColor: isValidationOk()==true? color.primary: color.placeholder,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 30,
                        width: '50%',
                        alignSelf: 'center',
                        borderRadius: 15,
                        height: 45
                    }}>
                    <Text style={{
                        padding: 8,
                        fontSize: fontSizes.h5
                    }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('press register')
                    }}>
                    <Text style={{
                        padding: 8,
                        fontSize: fontSizes.h5,
                        color: color.primary,
                        alignSelf: 'center'
                    }}>New user? Register now</Text>
                </TouchableOpacity>
            </View>}

            {keyboardIsShow == false && <View style={{
                flex: 15,
                            
            }}>
                <View style={{
                    height: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 20
                }}>
                    <View style={{
                        height: 1,
                        backgroundColor: 'black',
                       flex: 1,
                        
                    }}></View>

                    <Text style={{
                        padding: 8,
                        fontSize: fontSizes.h5,
                        color: 'black',
                        alignSelf: 'center',
                        marginHorizontal: 5
                    }}>Use other methods ?</Text>

                    <View style={{
                        height: 1,
                        backgroundColor: 'black',
                        flex: 1
                    }}></View>

                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Icon name="facebook" size={35} 
                        color= {color.facebook} />
                    <View style={{width: 20 }}/>
                    <Icon name="google" size={35} color= {color.google} />
                </View>

                
                
            </View>}

        </KeyboardAvoidingView>)

}

export default Login;