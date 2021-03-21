/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

//props title,style
const HomeListItem = (props) => {
    const anim = useRef(new Animated.Value(1)).current
    useEffect(() => {
       Animated.timing(anim,{
           toValue:0,
           duration:2000
       }).start()
    }, [])
    const transalation=anim.interpolate({inputRange:[0,1],outputRange:[0,100]})
    return (
        <Animated.View style={{...styles.root,...props.style,transform:[{translateY:transalation}]}}>
            <Text style={styles.text}>{props.title}</Text>
        </Animated.View>
    )
}

export default HomeListItem

const styles = StyleSheet.create({
    root:{backgroundColor:"grey"},
    text:{color:'white',padding:15,fontSize:15}
})
