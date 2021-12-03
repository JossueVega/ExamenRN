import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Card, ListItem, Button, Icon, Image, Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Funciones } from '../Component/Funciones';

const HomeScreen=({navigation}) =>{
  const { cartelera, agregar } = useContext(Funciones);

  return (
    <View>
    <Header    centerComponent={{ text: 'Cinepolis', style: { color: '#fff' } }}  />
      <ScrollView>
        {cartelera.map((a, b) => (
          <Card style={styles.contorno}>
            <Card.Title>{a.nombre}</Card.Title>
            <Image  source={a.url }  style={{ width: 200, height: 280 }}/>
            <Text key={b}>Clasificacion : {a.clasificacion}</Text> 
            <Text key={b}>Idioma : {a.idioma}</Text>
            <Text key={b}>Duracion : {a.duracion}</Text>
            <View style={styles.container}>
            { a.horarios.map((f)=>
              <Button title={f} buttonStyle={{borderRadius: 10, marginLeft: 10, marginRight: 10, marginBottom: 10}} onPress={()=> {navigation.navigate('Carrito');agregar(a,f)}}> {f}
              </Button>)}
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'row',
  },
  contorno: {
        fontSize: 20,
    fontWeight: "bold"
  },
});
