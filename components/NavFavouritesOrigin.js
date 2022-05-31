import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { useNavigationState } from "@react-navigation/native"
import {useDispatch} from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation, useRoute } from '@react-navigation/native';

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "7 Beach Road, Bondi Beach 2026",
    geometry: {
      "lat": -33.8885228,
      "lng": 151.2759971,
    },
    description: "7 Beach Road, Bondi Beach NSW, Australia"
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "WOTSO Bondi Junction",
    geometry: {
      "lat": -33.89299029999999,
      "lng": 151.2493345,
    },
    description: "WOTSO Bondi Junction, Bronte Road, Bondi Junction NSW, Australia"
  }
]


const NavFavourites = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation()

  return <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          // ItemSeparatorComponent={() => (
            // <View
            //   style={[tw`bg-gray-200`, { height: 0.5 }]} 
            // />
          // )}
          renderItem={({item: {location, icon, destination, geometry, description}}) => (
            <TouchableOpacity 
            style={tw`flex-row items-center p-5`}
            onPress={(data, details = null) => {
                dispatch(setOrigin({
                  location: geometry,
                  description: description
                }))
                navigation.navigate('MapScreen')
            }}
            >
              <Icon 
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={icon}
                type="ionicon"
                color="white"
                size={18}
              />
              <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
}

export default NavFavourites

const styles = StyleSheet.create({})