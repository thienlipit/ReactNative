import * as React from 'react';
import { Text, View, Image, Button, } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

const Home = ({navigation}) => {
    return ( <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home screen edit ok</Text>

            <Button title='Move to Setting screen' onPress={() => navigation.navigate('Setting')} />

            <Button 
                title='Start'
                onPress={() => {
                    alert("finish")

                }}
            />

        <View>
            <FontAwesome 
                icon={SolidIcons.smile}
            />
            <FontAwesome icon={RegularIcons.smileWink} />
            <FontAwesome icon={BrandIcons.github} />
            
        </View>

        </View>
    )
    
}

export default Home;