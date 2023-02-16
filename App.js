import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';

import  Square  from './Square.js'
import  Player  from './Player.js'

import { SafeAreaView } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen')

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });
  const [lp1, setLp1] = useState(Player[0].lifePoints)
    function handleClick(id){ 
      console.log(lp)
      setLp( prevLp =>
        {return  prevLp - 10} )
  }
  const [lp2, setLp2] = useState(Player[1].lifePoints)
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });


  function handleClick1(){ 
    setLp1( prevLp =>
      {return  prevLp - 10} )
  }
  function handleClick2(){ 
    setLp2( prevLp =>
      {return  prevLp - 10} )
  }

  const [isMain1, setMain1] = useState(true)
  function rollDice1(){
    setMain1( prevMain => !prevMain )
  }
  const [isMain2, setMain2] = useState(true)
  function rollDice2(){
    setMain2( prevMain => !prevMain )
  }
  
  const [isAdd1, setAdd1] = useState(false)
  function add1(){
    setAdd1( prevAdd => true )
    setMain1( prevMain => false )
  }
  const [isAdd2, setAdd2] = useState(false)
  function add2(){
    setAdd2( prevAdd => true )
    setMain2( prevMain => false )
  }
  function addFifty1(value){
    setLp1(prevLp => prevLp + 50)
  }
  function addFifty2(value){
    setLp2(prevLp => prevLp + 50)
  }
  function addH1(value){
    setLp1(prevLp => prevLp + 100)
  }
  function addH2(value){
    setLp2(prevLp => prevLp + 100)
  }
  function addTwoH1(value){
    setLp1(prevLp => prevLp + 200)
  }
  function addTwoH2(value){
    setLp2(prevLp => prevLp + 200)
  }
  function addFiveH1(value){
    setLp1(prevLp => prevLp + 500)
  }
  function addFiveH2(value){
    setLp2(prevLp => prevLp + 500)
  }
  function add1K1(value){
    setLp1(prevLp => prevLp + 1000)
  }
  function add1K2(value){
    setLp2(prevLp => prevLp + 1000)
  }
  function backFunc(){
    setMain1( prevMain => true )
    setAdd1( prevAdd => false )
    setAdd2( prevAdd => false )
    setMain2( prevMain => true )
  }

  function Restart(){
      setLp1( prevLp =>
          {return  prevLp  = 8000} )
      setLp2( prevLp =>
          {return  prevLp  = 8000} )
      setMain1( prevMain => true )
      setAdd1( prevAdd => false )
      setAdd2( prevAdd => false )
      setMain2( prevMain => true )
  }
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>

      <Square 
      id={1} 
      lp={lp1} 
      handleClick={handleClick1} 
      isMain={isMain1} 
      rollDice={rollDice1} 
      isAdd={isAdd1} 
      addFunc={add1} 
      backFunc={backFunc}
      addFifty={addFifty1}
      addH={addH1}
      addTwoH = {addTwoH1}
      addFiveH = {addFiveH1}
      add1K = {add1K1}
      ></Square>

      <View style={styles.round}>
        <Pressable  
          style={styles.buttons}
          onPress={Restart}>
              <Text style={styles.text}>Restart</Text>
          </Pressable>
      </View>
      <Square 
      id={2} 
      lp={lp2} 
      handleClick={handleClick2} 
      restart={Restart} 
      isMain={isMain2} 
      rollDice={rollDice2} 
      isAdd={isAdd2} 
      addFunc={add2} 
      backFunc={backFunc}
      addFifty={addFifty2}
      addH={addH2}
      addTwoH = {addTwoH2}
      addFiveH = {addFiveH2}
      add1K = {add1K2}
      ></Square>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.container}><Text style={styles.text}>Open up App.js to start working on your app!</Text></View> */}
      <StatusBar style="light" /> 
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002439',
    color: '#002439',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
    fontSize: 60,
  },
  round:{
    width: responsiveWidth(100),    
    backgroundColor: 'green',
    alignItems: 'center'
  }
});