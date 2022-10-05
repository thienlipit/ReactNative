import React, {useState} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Provider} from 'react-redux';
import TodosScreen from './screens/TodosScreen';
import colors from './config/colors';
import '../assets/i18n/i18n'
import AppText from './components/AppText';
import { store } from './store/configureStore';



let str = "abcd"

const App = () => {
  const {t, i18n} = useTranslation();
  
  const [currentLanguage,setLanguage] =useState('en');
  const changeLanguage = value => {
    // console.log(i18n)
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodosScreen />

        <Text>{t('Welcome to React')}</Text>


        <Pressable
          onPress={() => changeLanguage('en')}
          style={{
            backgroundColor:
              currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
            padding: 20,
          }}>
          <Text>Select English</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage('vi')}
          style={{
            backgroundColor:
              currentLanguage === 'vi' ? '#33A850' : '#d3d3d3',
            padding: 20,
          }}>
          <Text>Tieng viet</Text>
        </Pressable>
        




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
