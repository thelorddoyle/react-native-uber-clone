import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_APIKEY } from "react-native-dotenv"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux'
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import RideOptions from './RideOptions';

const NavigateCard = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl font-semibold`}>Good morning, Daniel.</Text>
      <View
        style={tw`border-t border-gray-200 flex-shrink`}
      >
        <View>
        <GooglePlacesAutocomplete 
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true} // you need this to fetch the details object onPress
          placeholder="Where to?"
          styles={{
            container: {
              flex: 0,
              backgroundColor: 'white',
              paddingTop: 20
            },
            textInput: {
              fontSize: 18,
              backgroundColor: '#DDDDDF',
              borderRadius: 0
            },
            textInputContainer: {
              paddingHorizontal: 20,
              paddingBottom: 0
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
            dispatch(setDestination({
              location: details.geometry.location,
              description: data.description
            }))
            navigation.navigate(RideOptions)
          }}
        />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})