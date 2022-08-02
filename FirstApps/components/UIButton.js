import React, {Component} from 'react'
import {TouchableOpacity, Text, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function UIButton(props) {
    const {onPress, title, isSelected} = props
    return <TouchableOpacity 
    onPress={onPress}
    style={{
        borderColor: 'white',
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isSelected == true ? 'white': null
    }}>
        
        {isSelected == true && <Icon name={"check-circle"} style={{
            color: 'green',
            position: 'absolute',
            top: 10,
            left: 10
            
            }}
            size={20} />}
       
        <Text style={{
            color: isSelected==true? '#ED6263': 'white'
        }}>{title}</Text>

    </TouchableOpacity>
}

export default UIButton;