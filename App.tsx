import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useRef } from 'react';
import BookingModule from './src/components/BookingModule'


export default function App() {
  const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

  let chosenDate : string = "Еще не выбрана";

  return (
    <View style={styles.container}>
      <Pressable style={styles.choosingScreenComponents} onPress={onOpen}>
        <Text style={{fontSize: 20}}>Выбрать дату</Text>
      </Pressable>
      <Text>Выбранная дата: {chosenDate}</Text>
      
      <Modalize ref={modalizeRef} modalHeight={500} modalStyle={styles.container} 
        disableScrollIfPossible={false} velocity={1000} withHandle={true}>
          <BookingModule/>
      </Modalize>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choosingScreenComponents: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
