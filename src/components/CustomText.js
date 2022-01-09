import React from 'react';
import {Text} from 'react-native';
import defaultStyles from '../config/styles';
function CustomText({children, style, numberOfLines, ...otherProps}) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[defaultStyles.text, style]}
      {...otherProps}>
      {children}
    </Text>
  );
}

export default CustomText;
