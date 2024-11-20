import {View,Text} from 'react-native'

export default function Saludar({user}) {
  const {firstName, lastName, age} = user
  return (
    <View>
      <Text>Hola {firstName} {lastName}</Text>
      <Text>Tienes {age} años</Text>
    </View>
  )
}
