import React, { useContext } from 'react';
import { Text,View, StyleSheet,Image,TouchableHighlight, SafeAreaView, TextInput} from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Funciones } from '../Component/Funciones';

const Wishlist=(navigation) =>{
  const { compra, comprar, calcular, borrartodo } = useContext(Funciones);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>    
    <Header  centerComponent={{ text: 'Cinepolis', style: { color: '#fff' } }}  />  
     <Card>
      <Card.Title>{compra.nombre}({compra.idioma})</Card.Title>
        <Text>Clasificacion : {compra.clasificacion}</Text> 
        <Text>Horario: {compra.horario}</Text>
          <TextInput
             style={styles.input}
             onChangeText={(e)=>calcular(e,compra)}
             value={number}
             placeholder="useless placeholder"
             keyboardType="numeric"/>
          <Text>Precio : $ {compra.precio} </Text>
          <View style={styles.container}>
              <Button title="Comrar" buttonStyle={{borderRadius: 10, marginLeft: 10, marginRight: 10, marginBottom: 10}} onPress={()=> navigation.navigate('HomeScreen')}/>
              <Button title="Cancelar" buttonStyle={{borderRadius: 10, marginLeft: 10, marginRight: 10, marginBottom: 10}} onPress={()=> navigation.navigate('HomeScreen')}/>
          </View>
      </Card>
    </View>
  );
}
export default Wishlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'Flex-end',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'row',
  },
});
