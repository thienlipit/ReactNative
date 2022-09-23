import * as React from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation, route }) {
    let strMessage = "string sent from HOME screen"
    const [count, setCount] = React.useState(0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
        
          headerRight: () => (
            <Button onPress={() => setCount((c) => c + 1)} title="+ count" />
          ),
          headerLeft: () => (
            <Button onPress={() => setCount((c) => c - 1)} title="- count" />
          ),
          
        });
        
      }, [navigation]);
    

    React.useEffect(() => {
        if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
      }, [route.params?.post]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{marginBottom: 20}}>Home Screen</Text>
            

            <Button
                
                title='Go to Details screen'
                onPress={() => navigation.navigate('Details', {
                    itemId: 999,
                    otherParam: strMessage,
                    params: { user: 'jane' },
                })} />

            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost', {
                    name: 'edit title from Home'
                })}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
            <Text style={{ margin: 10 }}>Count: {count}</Text>

        </View>
    );
}

function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Done"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: 'Home',
              params: { post: postText, name: "ok men"},
              merge: true,
            });
          }}
        />
      </>
    );
  }

function DetailsScreen({ route, navigation }) {
    // console.log(navigation)
    console.log(route)
    const { itemId, otherParam, params } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {otherParam}</Text>
            <Text>params: {params.user}</Text>
            {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      /> */}
            <Button
                style={{marginBottom: 20}}
                title="Go to Details... again"
                onPress={() =>
                    // navigation.push('Details', {
                    //     itemId: Math.floor(Math.random() * 100),
                    // })
                    navigation.setParams({
                        itemId: 777,
                        otherParam: 'edit message',
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function LogoTitle() {
    return (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../assets/house.png')}
      />
    );
  }

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                      backgroundColor: '#02457A',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{ 
                        // headerTitle: (props) => <LogoTitle {...props} />,
                        title: 'My Home',
                        // headerRight: () => (
                        //     <Button
                        //       onPress={() => alert('This is a button!')}
                        //       title="Info"
                        //       color="#97CADB"
                        //     />
                        //   ),
                        // headerLeft: () => (
                        //     <Button
                        //       onPress={() => alert('This is a button!')}
                        //       title="new button"
                        //       color="#97CADB"
                        //     />
                        //   ),
                        }}
                     />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen 
                    name="CreatePost" 
                    component={CreatePostScreen}
                    options={({ route }) => ({ title: route.params.name })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;