import React from "react";
import { View, Image, ScrollView, Dimensions, StyleSheet, Text, Animated, FlatList } from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.6; //60%
const images = [
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
const scrollX = new Animated.Value(0)
const position = Animated.divide(scrollX, width)

export default class DemoSnap extends React.Component {

    state = {
        active: 0
    }
    // change = ({nativeEvent}) => {
        
    //     const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    //     console.log('SLIDE', slide)
    //     console.log('SLIDE state', this.state.active)
    //     if (slide !== this.state.active) {
    //         this.setState({active: slide})
    //     }
    // }
    render() {
        return (
            <View style={styles.container}>

                <Animated.FlatList data = {images} 
                keyExtractor = {(item, index) => 'key' + index }
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment= 'center'
                scrollEventThrottle={16}
                decelerationRate = {"fast"}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item}) => {
                    // return <CarouselItem item = {item} />
                    return <Image
    
                            source={{ uri: item }}
                            style={styles.image} />
                }}

                onScroll = {Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}], 
                    {useNativeDriver: true}
                )}
                />


                {/* <ScrollView 
                    pagingEnabled 
                    horizontal 
                    // onScroll={this.change}
                    onScroll = {Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}], 
                        {useNativeDriver: true}
                    )}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scroll}>


                    {
                        images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={styles.image} />
                        ))
                    }
                </ScrollView> */}

                {/* <View style={styles.pagination}>
                    {
                        images.map((i, k) =>(
                            <Text style={k==this.state.active ? styles.pagingActiveText: styles.pagingText }>⬤</Text>
                        ))
                    }

                   
                </View> */}
                <View style = {styles.dotView}>
                    {images.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i-1, i , i+1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return(
                            <Animated.View 
                            key={i}
                            style = {{
                                opacity, 
                                height: 10, 
                                width: 10, 
                                backgroundColor: '#595959',
                                margin: 8, 
                                borderRadius: 5
                            }} />
                        )
                    })}

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {marginTop: 50, width, height},
    scroll: {width, height},
    image: {width: width,height: height,resizeMode: 'cover',},
    pagination: {flexDirection: 'row', position:'absolute', bottom: 0, alignSelf:'center'},
    pagingText: {color:'#888', margin: 3},
    pagingActiveText: {color:'#fff', margin: 3},
    dotView: {flexDirection: 'row', justifyContent: 'center'}
})