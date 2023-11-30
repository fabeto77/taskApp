import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import CustomModal from './components/CustomModal';
import CustomInput from './components/CustomInput';
import CustomFlatList from './components/CustomFlatList';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({});
  const [ModalVisible, setModalVisible] = useState(false);

  const onChangeTexTHandler = (text) => {
    setTextItem(text);
  }
  
  const addItemToListHandler = () => {
    
    const id = itemList.length
    setItemList(EstadoAnterior =>  [...EstadoAnterior, {id: id, value:textItem}]);
    // console.log(itemList);
    setTextItem('');
  }

  const onSelectItemHandler = (id) => {
    setModalVisible(true);
    setItemSelectedToDelete(itemList.find( (item) => item.id === id ))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id != itemSelectedToDelete.id))
    setModalVisible(!ModalVisible)
  }

  const renderListItem = ({item}) => (
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <Button title='x' onPress={() => onSelectItemHandler(item.id)}/>
    </View>
  )


  return (
    <>
      <View style={styles.container}>
        <CustomInput
          stylesProp={styles}
          placeholderProp={'Ingresar tarea'}
          onChangeTexTHandlerEvent={onChangeTexTHandler}
          textItemprop={textItem}
          addItemToListHandlerEvent={addItemToListHandler}
        />
        
        <CustomFlatList 
          itemListProp = {itemList}
          renderListItemProp = {renderListItem}  
        />

      </View>
      
      <CustomModal 
        animationTypeProp = 'slide' 
        isVisibleProp ={ModalVisible}
        stylesProps = {styles}
        itemSelectedToDeleteProps = {itemSelectedToDelete}
        setModalVisibleEvent = {setModalVisible}
        onDeleteItemHandlerEvent = {onDeleteItemHandler}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:50
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  TextInput:{
    width: 200,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
    margin: 10,
    backgroundColor:  "#a2d2ff",
    borderRadius: 10
  },
  modalMessageContainer:{
    alignItems: 'center',
    marginTop:50
  },
  modalButtonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20
  }

});
