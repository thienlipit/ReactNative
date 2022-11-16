npm i patch-package
npm install deprecated-react-native-prop-types or yarn add deprecated-react-native-prop-types
yarn add react-native-snap-carousel
yarn add @types/react-native-snap-carousel 
The invariant seems to be enforced in node_modules/react-native/index.js, starting at line 436:

// Deprecated Prop Types
  get ColorPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').ColorPropType
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').EdgeInsetsPropType
  },
  get PointPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').PointPropType
  },
  get ViewPropTypes(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').ViewPropTypes
  },



  Run:
  npx patch-package react-native
