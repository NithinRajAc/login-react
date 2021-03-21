/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import RouteLayout from '../route/RouteLayout';

const Splash = (props) => {
    const anim = useRef(new Animated.Value(0.5)).current;

    const startAnimation = ()=>{
        Animated.spring(anim,{
            toValue:1,
            friction:0.5,

        }).start(()=>props.navigation.replace('Login'));
    };

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <RouteLayout>
           <View style={styles.root}>

      <Animated.Image
      style={{...styles.Image,transform:[{scale:anim}]}}
       source={require('../assets/logo.png')}/>
       </View>
        </RouteLayout>
    );
};

export default Splash;

const styles = StyleSheet.create({
    root:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'},
image:{ width:'50%',height:'50%',resizeMode:'contain'},
});
