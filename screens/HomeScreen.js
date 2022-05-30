import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_APIKEY } from "react-native-dotenv"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>

        <Image 
          style={{
            width: 100, height: 100, resizeMode: 'contain'
          }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}  
        />

        <GooglePlacesAutocomplete 
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true} // you need this to fetch the details object onPress
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            }
          }}
          returnKeyType={"search"}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
            dispatch(setDestination(null))
          }}
        />

        <NavOptions />
        
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})