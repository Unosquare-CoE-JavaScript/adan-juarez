import React from 'react'
import PlaceForm from '../components/Places/PlaceForm/PlaceForm'


function AddPlaceScreen({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate('AllPlaces');
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlaceScreen;