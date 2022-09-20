import * as React from 'react';
import {StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
const {width, height} = Dimensions.get('screen');

const data = [
    'https://images.pexels.com/photos/7001610/pexels-photo-7001610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7863208/pexels-photo-7863208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3699434/pexels-photo-3699434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7169286/pexels-photo-7169286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7001499/pexels-photo-7001499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7001709/pexels-photo-7001709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7001720/pexels-photo-7001720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/920160/pexels-photo-920160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/8637571/pexels-photo-8637571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const imageW = width * 0.6 ;
const imageH = height * 0.5
const demoCarousel = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    console.log('Scroll Value', scrollX)
    return(
       <View style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar hidden />
        <View style={[StyleSheet.absoluteFillObject]}>
            {data.map((image, index) => {
                const inputRange = [
                    (index - 1)* width,
                    index * width,
                    (index + 1)* width
                ]
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange:[0, 1, 0]
                })

                return <Animated.Image
                    key={`image-${index}`}
                    source={{uri: image}}
                    style={[
                        StyleSheet.absoluteFillObject,
                        {
                            opacity
                        }

                    ]}
                    blurRadius={10}
                    />
            })}
        </View>

        <Animated.FlatList
            data={data}
            onScroll={Animated.event( 
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: true}
            )}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            renderItem= {({item}) => {
                return ( <View style={{width, justifyContent:'center', alignItems:'center'}}>
                    <Image 
                        source={{uri: item}}
                        style= {{
                            width: imageW,
                            height: imageH,
                            resizeMode: 'cover',
                            borderRadius: 16
                        }}/>
                    </View>
                )
            }}
        />
       </View>
    )
}

export default demoCarousel;