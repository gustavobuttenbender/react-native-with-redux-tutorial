import React from 'react'; 
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const buttonCustom = props => (
  <TouchableOpacity onPress={ props.onPress }>
    <View style={ [styles.button, { backgroundColor: props.color }] }>
      <Text style={ styles.font }>
        {props.children}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  font: {
    color: 'white'
  }
})

export default buttonCustom;