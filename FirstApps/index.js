/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import welcome from './welcomeScreen/welcome'

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => welcome);
