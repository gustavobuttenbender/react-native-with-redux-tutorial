import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
  <TextInput 
  {...props} 
  underlineColorAndroid='transparent' 
  style={[styles.input, props.style]}  
  />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ededed',
    padding: 8,
    margin: 8
  }
})

export default defaultInput; 