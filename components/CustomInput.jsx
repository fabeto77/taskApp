import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

const CustomInput = (
    {
        stylesProp,
        placeholderProp,
        onChangeTexTHandlerEvent,
        textItemprop,
        addItemToListHandlerEvent
    }

) => {
  return (
    <View style={stylesProp.inputContainer}>
        <TextInput 
        style={stylesProp.TextInput} 
        placeholder={placeholderProp}
        onChangeText={onChangeTexTHandlerEvent}
        value={textItemprop}
        />
        <Button 
        style={stylesProp.AddButton} 
        title='Add'
        onPress={() => addItemToListHandlerEvent()}
        />
    </View>
  )
}

export default CustomInput