import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'

const CustomFlatList = (
    {
        itemListProp,
        renderListItemProp
    }

) => {
  return (

        <FlatList
            data = {itemListProp}
            renderItem={renderListItemProp}
            keyExtractor={item => item.id}
        />

  )
}

export default CustomFlatList