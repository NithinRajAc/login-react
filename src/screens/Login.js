/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import {Animated, ImageBackground, StyleSheet, Text, View} from 'react-native';
import { Button, Card, Image } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { loginSlice } from '../../store/Slice';
import InputItem from '../components/InputItem';
import RouteLayout from '../route/RouteLayout';

const [USERNAME,PASSWORD] = ['username','password'];
const initialState = [
  {
    id:USERNAME,title:'Username',value:'',error:'',
  }, {
    id:PASSWORD,title:'Password',value:'',error:'',
  },
];
const Login = (props) => {


  const [inputs, setinputs] = useState(initialState);
  const anim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    animateFn();
  }, []);

  const animateFn = ()=>{
    Animated.timing(anim,{
      toValue:1,
      duration:300,
    }).start();
  };
  const dispatch = useDispatch();

  const handleChange = (text,id)=>{
    setinputs(inputs=>inputs.map(item=>id === item.id ? {...item,value:text,error:''} : item) );
  };

  const submitHandler = ()=>{
    var isvalid = true;
    var username = '';
    const checkList = inputs.map(item=>{
      if (item.id === USERNAME)
      {username = item.value;}
      if (item.value.length === 0){
        isvalid = false;
        return {...item,error:'Please enter ' + item.title};
      }
    else {return item;}
    }
    );



if (isvalid){
  console.log('success');
  dispatch(loginSlice.actions.saveUserName(username)); // username saving to redux
  props.navigation.replace('Home');
} else {
  console.log('fail');
  setinputs(checkList);}

};
  return (
    <RouteLayout>
      <View
      style={styles.root}
      >
      <View style={{flex:1,justifyContent:'center'}}>
      <Animated.Image
      style={{ width:'100%',height:'50%',resizeMode:'contain',transform:[{scale:anim}]}}
       source={require('../assets/logo.png')}/>
       </View>

      <Card containerStyle={styles.card} >
      <View style={{padding:20}}>
      <Text style={styles.loginTitle}>Login</Text>
      {
        inputs && inputs.map(item=> <InputItem style={styles.input}
        secureTextEntry={item.id === PASSWORD ? true : false}
        title={item.title} value={item.value}
        error={item.error}
        onChangeText={(text)=>handleChange(text,item.id)}
        />)
      }
      <Button title="Login" buttonStyle={styles.button}
        onPress={()=>submitHandler()}
      />
      <Text style={{marginTop:40,textAlign:'center',fontStyle:'italic'}}>Don't have an account? Sign up</Text>
      </View>
      </Card>
      </View>
    </RouteLayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  root:{flex:1,justifyContent:'center',backgroundColor:'black'},
  loginTitle:{fontSize:22,textAlign:'center',fontWeight:'bold'},
  card:{elevation:5,margin:0,alignSelf:'stretch',borderTopLeftRadius:100,overflow:'hidden'},
  input:{marginTop:20},
  button:{backgroundColor:'black',borderRadius:10,marginTop:20},
});
