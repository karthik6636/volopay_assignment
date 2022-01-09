import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import IconComponent from '../components/IconComponent';
import colors from '../config/colors';

export default function StickyHeader() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/Tenor_logo.svg.png')}
            resizeMode="contain"
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.upload}>
            <IconComponent
              name="upload"
              fill={colors.white}
              style={styles.arrowIcon}
              size={18}
            />
            <Text style={styles.text}>UPLOAD</Text>
          </View>
          <View style={styles.signin}>
            <Text style={styles.signintext}>SIGN IN</Text>
          </View>
          <IconComponent
            name="menu"
            fill={colors.black}
            style={styles.arrowIcon}
            size={30}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upload: {
    flexDirection: 'row',
    backgroundColor: colors.dodgerblue,
    //margin: 5,
    padding: 5,
    borderRadius: 2,
    alignSelf: 'center',
  },
  tinyLogo: {
    width: 80,
    height: 30,
    margin: 10,
  },
  signin: {
    borderWidth: 1,
    borderColor: colors.dodgerblue,
    margin: 10,
    padding: 5,
    borderRadius: 2,
    alignSelf: 'center',
  },
  arrowIcon: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  signintext: {
    fontSize: 12,
    alignSelf: 'center',
    color: colors.dodgerblue,
    fontWeight: 'bold',
  },
});
