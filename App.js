import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  Text, 
  View,
  TouchableHighlight,
} from 'react-native';

import styles from './App.style.js';
import Button from './components/Button.js'

export default function App() {
  const [all, setAll] = useState(0);
  const [car, setCar] = useState(0);
  const [truck, setTruck] = useState(0);
  const [ped, setPed] = useState(0);

  function handleDelButton() {
    setAll(0);
    setCar(0);
    setTruck(0);
  }
  function handleCarButton() {
    setCar(car+1)
    setAll(all+1)
  }
  function handleTruckButton() {
    setTruck(truck+1)
    setAll(all+1)
  }
  function handlePedButton() {
    setPed(truck+1)
    setAll(all+1)
  }
  return (
    <View style={styles.container}>
      <Text>Forgalom számláló</Text>
      
      <Button title="Mindent töröl" 
      onPress={handleDelButton} />

 
      <Text style={styles.sumtext}>Összes: {all}</Text>
      <Text>{car}</Text>

      <Button title="Személy" 
      onPress={handleCarButton} />

      <Text>{truck}</Text>

      <Button title="Teher" 
      onPress={handleTruckButton} />

      <Text>{ped}</Text>

      <Button title="Gyalolgos" 
      onPress={handlePedButton} />


      <StatusBar style="auto" />
    </View>
  );
}

