import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, Text, ActivityIndicator, FlatList, View, } from 'react-native';

interface Movies {
    id: string,
    title: string,
    releaseYear: string
}

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <View style={{ flex: 1, padding: 24, backgroundColor: 'white' }}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }: { item: Movies }) => (
                        <Text>{item.id}: {item.title}, {item.releaseYear}</Text>
                    )}
                />

            )}
        </View>
        // <SafeAreaView style={{ flex: 1, backgroundColor: '#e5e5e5', justifyContent: 'center', alignItems: 'center' }}>
        //     <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>Ba vo mac cuoi qua :v</Text>
        //     <Button title="Click me" />
        //     <Image
        //         style={{ height: 300, width: 300 }}
        //         source={{
        //             uri: 'https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg',
        //         }}
        //     />
        // </SafeAreaView>
    );
};

export default App;
