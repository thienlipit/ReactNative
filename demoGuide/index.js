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
import touchAbleOpacity from './screens/touchableOpacity'
import Modals from './screens/modal'
import RefreshControl from './screens/refreshControl'
import MyReactNativeForm from './screens/formik'
import KeyboardAvoidingComponent from './screens/KeyboardAvoidingComponent'
import SignUpForm from './src/components/Form/SignUpForm'
import ScaleDemo from './screens/scale'

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Cafe);
// AppRegistry.registerComponent(appName, () => ViewBoxesWithColorAndText);
// AppRegistry.registerComponent(appName, () => TextInANest);
// AppRegistry.registerComponent(appName, () => StyleSheets);
// AppRegistry.registerComponent(appName, () => ScrollView);
// AppRegistry.registerComponent(appName, () => touchAbleOpacity);
// AppRegistry.registerComponent(appName, () => Modals);
// AppRegistry.registerComponent(appName, () => RefreshControl);
// AppRegistry.registerComponent(appName, () => MyReactNativeForm);
//AppRegistry.registerComponent(appName, () => KeyboardAvoidingComponent);
// AppRegistry.registerComponent(appName, () => SignUpForm);
AppRegistry.registerComponent(appName, () => ScaleDemo);