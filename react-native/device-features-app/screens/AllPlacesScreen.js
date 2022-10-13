import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useIsFocused } from '@react-navigation/native';
import PlacesList from '../components/Places/PlacesList/PlacesList'
import { fetchPlaces } from '../utils/database';


const AllPlacesScreen = ({route}) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlacesScreen;

