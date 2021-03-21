/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

// props value,,title,error
// props styles: style,inputStyle,
const InputItem = (props) => {
    return (
        <View style={{...styles.root,...props.style}}>
        {props.title && <Text style={{...styles.titleStyle,...props.titleStyle}}>{props.title}</Text>}
            <TextInput style={{...styles.inputStyle,...props.inputStyle}}
             value={props.value} onChangeText={(text)=>props.onChangeText&&props.onChangeText(text)}
                 secureTextEntry={props.secureTextEntry}
             />
             {props.error && props.error.length>0?<Text style={{...styles.error,...props.error}}>{props.error}</Text>:null}
        </View>
    )
}

export default InputItem

const styles = StyleSheet.create({
    root:{

    },
    inputStyle:{
        minHeight:40,backgroundColor: 'rgba(52, 52, 52, 0.1)',marginTop:5,paddingHorizontal:10
    },titleStyle:{
        fontWeight:'700',fontSize:14
    },error:{
        color:'red',fontSize:12
    }
})
