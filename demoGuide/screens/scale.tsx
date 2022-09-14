import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  fontScale,
  scale,
  deviceInch,
  hasNotch,
  isAndroid,
  isIOS,
  isSmallDevice,
  isTablet,
  width,
  height,
} from 'react-native-utils-scale';

const ScaleDemo = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.fontScale}>Device width: {width}</Text>
        <Text style={styles.fontScale}>Device height: {height}</Text>
        <Text style={styles.fontScale}>Device inch: {deviceInch}</Text>
        <Text style={styles.fontScale}>
          isAndroid: {isAndroid.toString()}
        </Text>
        <Text style={styles.fontScale}>isIOS: {isIOS.toString()}</Text>
        <Text style={styles.fontScale}>isTablet: {isTablet.toString()}</Text>
        <Text style={styles.fontScale}>hasNotch: {hasNotch.toString()}</Text>
        <Text style={styles.fontScale}>
          isSmallDevice: {isSmallDevice.toString()}
        </Text>

        <View style={[styles.box, styles.scale]}>
          <Text style={[styles.color, {fontSize: fontScale(14)}]}>200x200</Text>
          <Text style={[styles.color, {fontSize: fontScale(14)}]}>
            Scale: {scale(350)}x{scale(350)}
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontScale: {
    fontSize: fontScale(16),
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  scale: {
    width: scale(350),
    height: scale(350),
  },
  color: {
    color: 'white',
  },
});

export default ScaleDemo;