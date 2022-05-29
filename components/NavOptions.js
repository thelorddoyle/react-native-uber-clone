import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const NavOptions = () => {

  const data = [
    {
      id: '123',
      title: 'Get a Ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen'
    },
    {
      id: '456',
      title: 'Order Food',
      image: 'https://links.papareact.com/28w',
      screen: 'EatsScreen'
    }
  ];

  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({item}) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image 
                style={{width: 120, height: 120, resizeMode: 'contain'}}
                source={{uri: item.image}}
              >
            </Image>
            <Text style={tw`mt-2 text-lg font-semibold pl-3`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )
      }
    />
  )
}

export default NavOptions