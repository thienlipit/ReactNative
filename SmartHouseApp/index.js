/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Tabs from './screen/mainTabs'

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Tabs);
