import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DrawerLayout from './assets/componentes/DrawerLayout';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DrawerLayout/>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
   // color: "red",
    marginTop:50
  }
});
