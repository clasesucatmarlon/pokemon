import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Marlon!</Text>
      <StatusBar style="auto" />
      <LoginForm />
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
