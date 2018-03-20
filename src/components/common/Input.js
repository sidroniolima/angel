import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => 
{
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={ containerStyle }>
      <Text style={ labelStyle }>{label}</Text>
      <TextInput      
        secureTextEntry={ secureTextEntry }  
        underlineColorAndroid='transparent'
        placeholder={ placeholder }
        autoCorrect={ false }
        style= { inputStyle }
        onChangeText={ onChangeText }
        value={ value }/>
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 20, 
    width: 100
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input };