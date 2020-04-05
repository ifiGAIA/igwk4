import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedbac, TouchableOpacity,Linking } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation';


import Albumlist from './src/components/Albumlist';
import DetailScreen from './src/components/DetailScreen';

import albumData from "./src/json/album.json";

const Stack = createStackNavigator();

const App = () => {
  return (
  
<NavigationContainer ref={navigationRef}>
  <Stack.Navigator>
    
    <Stack.Screen name="mybook" component={Albumlist} options={{
      headerLeft: () =>  <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
      <Image style={styles.headdd} source = {{uri:albumData[0].camara}}/>
      </TouchableOpacity>,
       
       headerRight: () =>  <TouchableOpacity onPress={() => navigationRef.current?.navigate("Detail")}>
       <Image style={styles.headd} source = {{uri:albumData[0].share}}/>
       </TouchableOpacity>,
      title: 'instagram',
      headerTintColor: '#000',
      headerStyle: { backgroundColor: '#fff' },
      headerTitle:(<Image style={styles.t}  source = {{uri:albumData[0].titleimg}}/>)
    }}/>
    
    <Stack.Screen name="Detail" component={DetailScreen} options={{
      headerLeft: () =>  <TouchableOpacity onPress={() => navigationRef.current?.navigate("mybook")}>
      <Image style={styles.p} source = {{uri:albumData[0].previous}}/>
      </TouchableOpacity>,
     headerRight: () =>  <View style={styles.hr}><TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
     <Image style={styles.v} source = {{uri:albumData[0].video}}/>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
     <Image style={styles.e} source= {require('./src/img/edit.png')}/>
     </TouchableOpacity></View>,
    
    
     
      title: 'Direct',
      headerTintColor: '#000',
      headerStyle: { backgroundColor: '#fff' },
      
    }}/>
    
  </Stack.Navigator>
  
</NavigationContainer>


  );
}

const styles = StyleSheet.create({
  
  container:
  {
    borderColor: '#000',
    backgroundColor: "#000",
    color:'#000',
  },
  
  headdd:
  {
    width:25,
    height:25,
    left:9,
    marginBottom:5
  },
  headd:
  {
    width:30,
    height:30,
    right:8,
    marginBottom:4
  },
t:
{
  width:120,
  height:40
},
p:
{
  width:25,
  height:25,
  left:6,
  marginBottom:5
},
v:
{
  width:30,
  height:30,
  right:10,
  margin:5
},
hr:
{
  flexDirection:"row"
},
e:
{
  width:23,
  height:23,
  right:8,
  margin:8
}

});
export default App;

  