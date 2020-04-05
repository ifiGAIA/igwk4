import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity } from 'react-native';
import GEM from '../json/album.json';

import { AppLoading } from 'expo';

const Albumlist = ({navigation}) => {
  console.log(navigation)
  return (
    
    <ScrollView style={styles.container} >
    <View style={styles.Gem} name="side_open">
    
    <View style={styles.ph}>
    <Image style={styles.Gemph} source= {require('../img/ph1.png')}
    />
    <Text style={styles.text1}>{GEM[0].text1}</Text>
    <Image style={styles.dot} source = {{uri:GEM[0].dot}}
    />
    </View>
    <Image style={styles.Gemph2} source = {{uri:GEM[0].img1}}
    />
    <View style={styles.h1}>
    <Image style={styles.Gemph3} source = {{uri:GEM[0].img2}}
    />
     <Image style={styles.Gemph4} source = {{uri:GEM[0].img3}}
    />
    <Image style={styles.s} source = {{uri:GEM[0].share}}
    />
    <Image style={styles.ph2} source = {{uri:GEM[0].collection}}
    />
    </View>
    <Text style={styles.text2}>{GEM[0].text2}</Text>
    <View style={styles.text3}>
    <Text style={styles.text31}>{GEM[0].text1}</Text>
    <Text style={styles.text32}>{GEM[0].text3}</Text>
    </View>
  </View>
  <View style={styles.Gem} name="side_open">
    
    <View style={styles.ph}>
    <Image style={styles.Gemph} source= {require('../img/ph11.png')}
    />
    <Text style={styles.text1}>{GEM[1].text1}</Text>
    <Image style={styles.dot2} source = {{uri:GEM[1].dot}}
    />
    </View>
    <Image style={styles.Gemph2} source = {{uri:GEM[1].img1}}
    />
    <View style={styles.h1}>
    <Image style={styles.Gemph3} source = {{uri:GEM[1].img2}}
    />
     <Image style={styles.Gemph4} source = {{uri:GEM[1].img3}}
    />
    <Image style={styles.s} source = {{uri:GEM[1].share}}
    />
    <Image style={styles.ph2} source = {{uri:GEM[1].collection}}
    />
    </View>
    <Text style={styles.text2}>{GEM[1].text2}</Text>
    <View style={styles.text3}>
    <Text style={styles.text31}>{GEM[1].text1}</Text>
    <Text style={styles.text32}>{GEM[1].text3}</Text>
    </View>
  </View>
  <View style={styles.Gem} name="side_open">
    
    <View style={styles.ph}>
    <Image style={styles.Gemph} source= {require('../img/ph111.png')}
    />
    <Text style={styles.text1}>{GEM[2].text1}</Text>
    <Image style={styles.dot3} source = {{uri:GEM[2].dot}}
    />
    </View>
    <Image style={styles.Gemph2} source = {{uri:GEM[2].img1}}
    />
    <View style={styles.h1}>
    <Image style={styles.Gemph3} source = {{uri:GEM[2].img2}}
    />
     <Image style={styles.Gemph4} source = {{uri:GEM[2].img3}}
    />
    <Image style={styles.s} source = {{uri:GEM[2].share}}
    />
    <Image style={styles.ph2} source = {{uri:GEM[2].collection}}
    />
    </View>
    <Text style={styles.text2}>{GEM[2].text2}</Text>
    <View style={styles.text3}>
    <Text style={styles.text31}>{GEM[2].text1}</Text>
    <Text style={styles.text32}>{GEM[2].text3}</Text>
    </View>
  </View>
 
 
  </ScrollView>
 
  );
};


const styles = StyleSheet.create({
  container:
  {
    backgroundColor:'#d1d1d1'
  },
    Gem:
    {
      height:540,
      backgroundColor:'#f8f8f8'
    },
   
    ph:
    {
      borderColor: "#d1d1d1",
      backgroundColor: "#f8f8f8",
      flexDirection:"row",
      padding:10
    },
    text1:
    {
      fontSize:15,
      color:'#2e2e2e',
      fontWeight:'bold',
      padding:8
    },
    dot:
    {
      position:"absolute",
      width:15,
      height:15,
      right:13,
      top:20
    },
    dot2:
    {
      position:"absolute",
      width:15,
      height:15,
      right:13,
      top:20
    },
    dot3:
    {
      position:"absolute",
      width:15,
      height:15,
      right:13,
      top:20
    },
    Gemph:
    {
     
      height:35,
      width:35
      
    },
    Gemph2:
    {
     
      height:370
      
    },
    h1:
    {
      flexDirection:"row",
    },
    Gemph3:
    {
      width:25,
      height:25,
      margin:10,
      marginLeft:12
    },
    Gemph4:
    {
      width:25,
      height:25,
      margin:9,
      marginLeft:10
    },
    s:
  {
      width:30,
      height:30,
      margin:8,
      marginLeft:10
  },
    text2:
    {
      fontSize:15,
      color:'#2e2e2e',
      fontWeight:'bold',
      paddingLeft:10
    },
    ph2:
    {
      marginLeft:200,
      width:25,
      height:25,
      margin:9,
    },
    text3:
    {
      flexDirection:"row",
      padding:10,
      paddingLeft:10
    },
    text31:
    {
      fontSize:15,
      color:'#2e2e2e',
      fontWeight:"bold",

    },
    text32:
    {
      fontSize:15,
      color:'#2e2e2e',
      paddingLeft:5
    },
    
});

export default Albumlist;