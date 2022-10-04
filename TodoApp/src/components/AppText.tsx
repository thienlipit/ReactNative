import {Text, TextStyle} from 'react-native';
import React, {FunctionComponent} from 'react';

import defaultStyles from '../config/styles'

interface Props {
  style?: TextStyle;
}

const AppText: FunctionComponent<Props> = ({children, style}) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
