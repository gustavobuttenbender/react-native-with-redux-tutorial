import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/rivendell.jpg';
import ButtonCustom from '../../components/UI/ButtonCustom/ButtonCustom';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs(); 
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText> Log In </HeadingText>
          </MainText>

          <ButtonCustom color='#446CB3' onPress={this.loginHandler}>
            Switch to Login
          </ButtonCustom> 
          
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Email Address" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <ButtonCustom color='#446CB3' onPress={this.loginHandler}>
            Submit
          </ButtonCustom> 
        </View>
      </ImageBackground>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  },
  backgroundImage: {
    width: '100%',
    flex: 1
  }
})

export default AuthScreen;