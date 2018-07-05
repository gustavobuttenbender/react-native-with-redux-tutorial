import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/places'; 

class SharePlaceScreen extends Component {
  
  placeAddedHanlder = placeName => {
    this.props.onPlaceAdded(placeName);
  };

  render() {
    return(
      <View>
         <PlaceInput onPlaceAdded={this.placeAddedHanlder} />
      </View>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPlaceAdded: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);