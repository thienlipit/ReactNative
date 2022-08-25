/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {welcome, logIn, register} from './screens/index'

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => welcome );