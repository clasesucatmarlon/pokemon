import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';

export default function App() {

  const user = {
    firstName: 'Marlon',
    lastName: 'GARCIA',
    age: 52
  }

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Saludar user={user}/>
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
});
