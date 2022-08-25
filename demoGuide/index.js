/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Cafe from './screens/state';
import ViewBoxesWithColorAndText from './screens/view'
import TextInANest from './screens/textInNest'
import StyleSheets from './screens/styleSheet'
import ScrollView from './screens/scrollView'
import UselessTextInput from './screens/textInput'

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Cafe);
// AppRegistry.registerComponent(appName, () => ViewBoxesWithColorAndText);
// AppRegistry.registerComponent(appName, () => TextInANest);
// AppRegistry.registerComponent(appName, () => StyleSheets);
// AppRegistry.registerComponent(appName, () => ScrollView);
AppRegistry.registerComponent(appName, () => UselessTextInput);

