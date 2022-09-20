import React from 'react';
import {View} from 'react-native';
import Carousel from '../src/components/Carousel';
import {dumyData} from '../data/Data'

const Home = (nagivation) => {
    return (<View>
        <Carousel data={dumyData} />
        
    </View>)
}
export default Home