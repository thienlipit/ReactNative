import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Alert
}
    from "react-native";
import {images, icons, color} from '../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {UIButton} from '../components'
import {fontSizes} from '../constants/index'

const welcome = () => {

    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influencer',
            isSelected: true
        },
        {
            name: 'Business',
            isSelected: false
        },
        {
            name: 'Individual',
            isSelected: false
        }
        ])

    return <View style={{
        backgroundColor: 'while',
        flex: 100
    }}>
        <ImageBackground source={
            images.background
        }
            resizeMode='cover'
            style={{
                flex: 100
            }}
        >
            <View style={{
                flex: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center'

                }
                }>
                    <Image source={icons.fire}
                        style={{
                            height: 30,
                            width: 30,
                            marginStart: 10,
                            marginEnd: 5
                        }}
                    />
                    <Text style={{
                        color: 'white'
                    }}>
                        DEMOCOMPANY.CO
                    </Text>
                    <View style={{ flex: 1 }} />

                    <Icon name={'question-circle'}
                    size={20}
                    color={'white'}
                    style={{
                        marginEnd: 10
                    }} />

                    {/* <Image source={icons.question}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: 'white',
                            marginEnd: 10
                        }}
                    /> */}
                </View>

            </View>

            <View style={{
                flex: 20,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    marginBottom: 7, 
                    color: 'white',
                    fontSize: fontSizes.h5
                    }}>Welcome to</Text>
                <Text style={{
                    marginBottom: 7, 
                    color: 'white',
                    fontSize: fontSizes.h4,
                    fontWeight: 'bold'
                    }}>DEMO COMPANY</Text>
                <Text style={{
                    color: 'white',
                    fontSize: fontSizes.h5
                    }}>Please select your account type</Text>
                {/* <View>
                    
                </View> */}
            </View>

            <View style={{
                flex: 40,
                // justifyContent: 'center'
                
            }}>
                {/* <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                    // onPress={this.loginWithFacebook}
                >
                    Login with Facebook
                </Icon.Button> */}

                {accountTypes.map(accountType => <UIButton onPress={()=> {
                    let newAccountTypes = accountTypes.map(each =>
                        { return {
                            ...each,
                            isSelected: each.name == accountType.name
                        }
                        })
                        setAccountTypes(newAccountTypes)
                }} 
                title = {accountType.name}
                isSelected = {accountType.isSelected}
                 />)}
                
        

            </View>

            <View style={{
                flex: 20,
       
                
                
            }}>
                <UIButton  
                
                title = {'LOGIN'}
                />

                <Text style={{
                     color: 'white',
                     fontSize: fontSizes.h5,
                     alignSelf: 'center'
                }} >Do you want to register new account?</Text>
                
                <TouchableOpacity
                    onPress={()=> {
                        Alert.alert('press register')
                    } } 
                    style={{
                    padding: 5
                }} >
                    <Text style={{
                        color: color.primary,
                        fontSize: fontSizes.h5,
                        alignSelf: 'center',
                        textDecorationLine: 'underline'
                    }} >Register</Text>
                </TouchableOpacity>


            </View>
        </ImageBackground>

    </View>

}

export default welcome;