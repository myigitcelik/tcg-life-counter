import { StyleSheet, Text, View, Pressable, Image , ViewBase } from 'react-native';
import React, { useState } from 'react';
import  Player  from './Player.js';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
export default function Square(props){
    
    const isMain = true;
   return(
    <View style={ (props.id == 1 ) ? styles.square1 : styles.square2}>
        <Text style= {styles.text}>{props.lp}</Text>
        {props.isMain && <View style={{display:'flex;',flexDirection:'row', justifyContent: 'space-between', width: responsiveWidth(40),marginBottom:10}}> 
            <Pressable  
            style={styles.buttons}
            onPress={
                props.addFunc
            }>
            <Image style={styles.buttonImage} source={require('./assets/add.png')} />

            </Pressable>

            <Pressable  
            style={styles.buttons}
            onPress={props.handleClick
            }>
            <Image style={styles.buttonImage} source={require('./assets/minus.png')} />

            </Pressable>
        
        </View>}
        {props.isAdd && <View style={{display:'flex;',flexDirection:'row', justifyContent: 'space-between', width: responsiveWidth(60),marginBottom:10}}>
        <Pressable  
                style={styles.buttons}
                onPress={props.addFifty}>
                <Text style={styles.buttonText}>50</Text>
            </Pressable> 
        <Pressable  
                style={styles.buttons}
                onPress={props.addH}>
                <Text style={styles.buttonText}>100</Text>
            </Pressable>

            <Pressable  
                style={styles.buttons}
                onPress={props.addTwoH}>
                <Text style={styles.buttonText}>200</Text>
            </Pressable>
        
        </View>}
        {props.isAdd && <View style={{display:'grid;',flexDirection:'row',justifyContent: 'space-between',width: responsiveWidth(60)}}> 
            <Pressable  
                style={styles.buttons}
                onPress={props.addFiveH}>
                <Text style={styles.buttonText}>500</Text>
            </Pressable>

            <Pressable  
                style={styles.buttons}
                onPress={props.add1K}>
                <Text style={styles.buttonText}>1000</Text>
            </Pressable>
            <Pressable  
            style={styles.buttons}
            onPress={props.backFunc}>
                <Image style={styles.buttonImage} source={require('./assets/back.png')} />
            </Pressable>
        </View>}
       {props.isMain && <View style={{display:'grid;',flexDirection:'row',justifyContent: 'space-between',width: responsiveWidth(60)}}> 
            <Pressable  
            style={styles.buttons}
            onPress={() => {

            }}>
                <Image style={styles.buttonImage} source={require('./assets/coin.png')} />
            </Pressable>
            <Pressable  
            style={styles.buttons}
            onPress={() => {

            }}>
                <Image style={styles.buttonImage} source={require('./assets/coin.png')} />
            </Pressable>
            <Pressable  
            style={styles.buttons}
            onPress={props.rollDice
            }>
                <Image style={styles.buttonImage} source={require('./assets/die.png')} />
            </Pressable>
        </View>}
        {props.id == 2 &&   
        <View style={{width:'70%', position:'absolute', alignItems:'flex-end', marginBottom:'5%', bottom:0, right: 20}}>
            <Pressable  
            //style={styles.buttons}
            onPress={props.restart
            }>
                <Image style={styles.buttonImage} source={require('./assets/restart.png')} />
            </Pressable>
        </View>
        }

    </View>
   )
    
}

const styles = StyleSheet.create({
    text:{
      color: '#78cce2',
      fontSize: responsiveFontSize(10),
      marginBottom: '5%'
    },
    buttonText:{
        color: '#4e7988',
        fontSize: responsiveFontSize(2)
        
      },
      buttonImage:{
        width: responsiveHeight(3),
        height: responsiveHeight(3),
        color: '#4e7988',
      },
    square1:{
        paddingTop: responsiveHeight(3),
        transform: [{ rotate: '180deg'}],
        backgroundColor:'#002439',
        height: responsiveHeight(50),
        width: responsiveWidth(100),
        flex: 1,
        alignItems: 'center',
     //   justifyContent: 'center',
    }   ,
    square2:{
        paddingTop: responsiveHeight(3),

        backgroundColor:'#005066',
        height: responsiveHeight(50),
        width: responsiveWidth(100),
       alignSelf: 'stretch',

        flex:1,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    buttons:{
        width: responsiveWidth(17),
        height: responsiveHeight(8),
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:10, paddingLeft:10, paddingRight:10, paddingBottom:10,
        borderRadius: 100,
        elevation: 6,
        color: '#4e7988',
        backgroundColor: '#78cce2',
    }
  });