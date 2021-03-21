/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const RouteLayout = (props) => {
  return (
    <SafeAreaView style={{...styles.root,...props.style}}>
      <View style={styles.root}>{props.children}</View>
    </SafeAreaView>
  );
};

export default RouteLayout;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
