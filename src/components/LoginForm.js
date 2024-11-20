import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'; 

export default function LoginForm() {
  return (
    <View>
      <Text >Login</Text>
      <TextInput placeholder='Email'/>
      <TextInput placeholder='Passwod'/>
      <Button title='Enviar' onPress={() => console.log('Sending....')} />
    </View>
  )
}

