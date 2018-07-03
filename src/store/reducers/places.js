import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionsTypes';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({ 
          key: Math.random().toString(), 
          name: action.placeName,
          image: {
            uri: 'http://4.bp.blogspot.com/-lDh5JjxmvVE/UTEwGO28iXI/AAAAAAAABIs/XVYifPfvsQ0/s1600/Rivendell_MatthewRodgers.jpg'
          }
        })
      };
    case DELETE_PLACE:  
      return {
        ...state,
        places: state.places.filter(place => place.key !== state.selectedPlace.key),
        selectedPlace: null
      };
    case SELECT_PLACE: 
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.key)
      };
    case DESELECT_PLACE: 
      return {
        ...state,
        selectedPlace: null
      };
    default: 
      return state;
  }
};


export default reducer;