import React from "react";
import { View, StyleSheet, Dimensions, Animated } from 'react-native'
import CarouselItem from './CarouselItem'

const { width, height } = Dimensions.get('screen')

const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    const position = Animated.divide(scrollX, width)

    if (data && data.length) {
        return (
            <View>
                <Animated.FlatList data={data}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment='center'
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />
                    }}

                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{
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
    } else {
        console.log('Please provide Images')
        return null
    }

}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})

export default Carousel