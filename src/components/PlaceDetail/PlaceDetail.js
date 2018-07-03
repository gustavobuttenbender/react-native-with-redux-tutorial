import React from 'react'
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native'; 


const placeDetail = props => (
  <Modal
    onRequestClose={props.onModalClosed}
    visible={props.selectedPlace !== null} 
    animationType="slide"

  >
    <View style={styles.modalContainer}>

    {
      props.selectedPlace && (
        <View>
          <Image source={props.selectedPlace.image} style={styles.placeImage}/>
          <Text style={styles.placeName}>
            {props.selectedPlace.name}
          </Text>
        </View>
      )
    }
      
      <View style={styles.buttonsContainer}>
        <Button title="Close" onPress={props.onModalClosed} />
        <Button title="Delete" color="red" onPress={props.onItemDeleted} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    margin: 10
  }
})


export default placeDetail; 