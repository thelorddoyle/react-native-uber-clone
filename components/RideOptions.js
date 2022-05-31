import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';


const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]

const SURCHARGE_RATE = 1.75;

const RideOptions = () => {
  
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate("NavigateCard")} 
          style={tw`absolute top-3 left-5 p-3 rounded-full z-10`}
          >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl font-semibold`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
      </View>

      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item: { id, title, multiplier, image}, item}) => (
          <TouchableOpacity 
            style={tw`flex-row items-center px-10 ${id === selected?.id && "bg-gray-200"}`}
            onPress={() => setSelected(item)}>
            <Image 
              style={{
                width: 85,
                height: 85,
                resizeMode: "contain",
              }}
              source={{uri: image}}
            />
            <View style={tw`-ml-6 z-20 px-10`}>
              <Text style={tw`text-xl font-semibold border-2`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl absolute right-10`}>
              {new Intl.NumberFormat('en-AU', {
              style: 'currency',
              currency: 'AUD',
            }).format((travelTimeInformation?.duration.value * SURCHARGE_RATE * multiplier) / 100)}</Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default RideOptions

const styles = StyleSheet.create({})