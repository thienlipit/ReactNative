/**
 * @format
 */

import { AppRegistry } from 'react-native';

import MyApp from './src/navigators/bottomNavigationBar';

import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => MyApp);
TrackPlayer.registerPlaybackService(() => require('./src/screens/sound/TrackPlayerSerivce'));