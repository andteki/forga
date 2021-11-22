import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableHighlight,
  Button 
} from 'react-native';

export default function App() {
  const [all, setAll] = useState(0);
  const [car, setCar] = useState(0);

  function handleDelButton() {
    setAll(0);
  }
  return (
    <View style={styles.container}>
      <Text>Forgalom számláló</Text>
      
      <TouchableHighlight
          style={styles.runButton}
          onPress={handleDelButton}
          >
          <Text style={styles.runText}>Mindent töröl</Text>
      </TouchableHighlight>

      <Text>Összes: {all}</Text>
      <Text>{car}</Text>

      <TouchableHighlight
          style={styles.runButton}
          onPress={handleDelButton}
          >
          <Text style={styles.runText}>Mindent töröl</Text>
      </TouchableHighlight>
      
      <StatusBar style="auto" />
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
  runButton: {
    backgroundColor: 'blue',
    marginTop: 10,
    marginBottom: 70,
    padding: 10,
    borderRadius: 3,

  },
  runText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  },  
});
