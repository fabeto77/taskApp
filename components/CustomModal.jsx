import { View, Text, Modal, Button } from 'react-native'
import React from 'react'

const CustomModal = (
    {
        animationTypeProp,
        isVisibleProp,
        stylesProps,
        itemSelectedToDeleteProps,
        setModalVisibleEvent,
        onDeleteItemHandlerEvent


    }
) => {
  return (
    <View>
      <Modal
        animationType={animationTypeProp}
        visible={isVisibleProp}
      >
          <View style={stylesProps.modalMessageContainer}>
            <Text>Se eliminará: </Text>
            <Text>{itemSelectedToDeleteProps.value}</Text>
          </View>
          <View style={stylesProps.modalButtonContainer}>
            <Button title='Cancelar' color="#a2d2ff" onPress={() => setModalVisibleEvent(!isVisibleProp)}/>
            <Button title='Eliminar' color="#ef233c" onPress={() => onDeleteItemHandlerEvent()}/>
          </View>

      </Modal>
    </View>
  )
}

export default CustomModal