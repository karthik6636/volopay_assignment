import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import CustomText from './CustomText';

const IconComponent = ({name, size = 20, fill = '#000', label, style}) => {
  return (
    <>
      {/*   <Icon
        name={name}
        size={size}
        color={fill}
        style={[styles.iconStyle, style]}
      />*/}

      <MaterialCommunityIcons
        name={name}
        color={fill}
        size={size}
        style={[styles.iconStyle, style]}
      />
      {label && (
        <CustomText style={{fontSize: 12, color: colors.primary}}>
          {label}
        </CustomText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  //iconStyle: {padding: 5},
});
export default IconComponent;
