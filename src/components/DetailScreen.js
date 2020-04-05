import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Button, Linking ,TouchableOpacity,ScrollView} from 'react-native';
import GEM from '../json/album.json'

const DetailScreen = () => {
  return (
    
    <ScrollView style={styles.container} >
     <View style={styles.v1}>
     <Image style={styles.Gemph} source= {require('../img/ph1.png')}
    />
    <View style={styles.v11}>
    <Text style={styles.text1}>{GEM[0].text1}</Text>
    <Text style={styles.text11}>{GEM[0].text11}</Text>
    </View>
    <Image style={styles.headdd} source = {{uri:GEM[0].camara}}/>
     </View>
     <View style={styles.v1}>
     <Image style={styles.Gemph} source= {require('../img/ph11.png')}
    />
    <View style={styles.v11}>
    <Text style={styles.text1}>{GEM[1].text1}</Text>
    <Text style={styles.text11}>{GEM[1].text11}</Text>
    </View>
    <Image style={styles.headd} source = {{uri:GEM[0].camara}}/>
     </View>
     <View style={styles.v1}>
     <Image style={styles.Gemph} source= {require('../img/ph111.png')}
    />
    <View style={styles.v11}>
    <Text style={styles.text1}>{GEM[2].text1}</Text>
    <Text style={styles.text11}>{GEM[2].text11}</Text>
    </View>
    <Image style={styles.head} source = {{uri:GEM[0].camara}}/>
     </View>
    
      </ScrollView>
  );
};


const styles = StyleSheet.create({
  container:
  {
    backgroundColor:"#fff"
  },
   v1:
   {
     height:70,
     backgroundColor:"#fff",
     flexDirection:"row",
     padding:8,
     paddingLeft:15
   },
   text1:
    {
      fontSize:15,
      color:'#2e2e2e',
      fontWeight:'bold',
     
    },
    text11:
    {
      fontSize:15,
      color:'#8c8c8c',
      
    },
    v11:
    {
      padding:10,
      paddingLeft:15,
      
    },
    headdd:
  {
    right:20,
    width:30,
    height:30,
    top:20,
    position:"absolute",
    opacity:0.4
  },
  headd:
  {
    right:20,
    width:30,
    height:30,
    top:20,
    position:"absolute",
    opacity:0.4
  },
    Gemph:
    {
      
      height:55,
      width:55
      
    },
    head:
  {
    right:20,
    width:30,
    height:30,
    top:20,
    position:"absolute",
    opacity:0.4
  },
});

export default DetailScreen;