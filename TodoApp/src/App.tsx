import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import TodosScreen from './screens/TodosScreen';
import colors from './config/colors';
// import configureStore from './store/configureStore';
import AppText from './components/AppText';
import { store } from './store/configureStore';


// const store = configureStore(

// );

let str = "abcd"

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodosScreen />
        {/* <AppText style={{backgroundColor: 'blue'}} children={str}/> */}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  temp: {
    padding: 20,
  },
});

export default App;
