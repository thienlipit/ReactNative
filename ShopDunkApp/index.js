/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import Tabs from './src/navigators/bottomNavigationBar';

import MyApp from './src/navigators/bottomNavigationBar';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MyApp);
