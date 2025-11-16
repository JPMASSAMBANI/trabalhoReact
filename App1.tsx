import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import foto from './assets/pngwing.com.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={foto} 
      style={styles.foto}/>
      <StatusBar style="auto" />
    </View>
  );
}


