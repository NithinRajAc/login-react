/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import HomeListItem from '../components/HomeListItem';
import RouteLayout from '../route/RouteLayout';

const Home = (props) => {
    const username = useSelector(state => state.login); //username getting from redux
    return (
        <RouteLayout style={styles.root}>
        <View style={styles.container}>
<View style={{flex:1}}/>
<View style={{flex:4,marginHorizontal:10}}>
        <Text style={styles.hi}>welcome</Text>
        <Text style={styles.name}>{username}</Text>
        </View>
        <HomeListItem style={{...styles.listItem,backgroundColor:'black',flex:4}} title="Task 1"/>
        <HomeListItem style={{...styles.listItem,backgroundColor:'#474646',flex:2}} title="Task 2"/>
        <HomeListItem style={{...styles.listItem,backgroundColor:'#6e6d6d',flex:1}} title="Task 3"/>
            </View>
        </RouteLayout>
    );
};

export default Home;

const styles = StyleSheet.create({
    root:{
    backgroundColor:'white',
},container:{
    flex:1,marginHorizontal:20,borderBottomRightRadius:30,
    borderBottomLeftRadius:30,overflow:'hidden'
},hi:{color:'#666666',fontSize:24},
name:{color:'black',fontSize:40,fontWeight:'600'},
listItem:{},
});
