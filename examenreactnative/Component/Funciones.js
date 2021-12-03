import React, {createContext, useState} from 'react';
import { Text, View, StyleSheet, ToastAndroid, Button, StatusBar, Alert } from "react-native";
 

export const Funciones = createContext();

const Funcionesprovider = (props) =>{

    const [compra,setCompra]= useState({});
    const [cartelera, setCartelera]=useState([
      {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00','17:50','20:30'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
      {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00','11:30','13:30'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
      {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00','13:50','19:40'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
      {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30','14:20','18:30'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
    ]); 
 
  // Carrito
  const agregar=(b,horario)=>{
     
    const objtemporal={
          codigo:b.codigo,
          nombre:b.nombre,
         idioma:b.idioma,
         clasificacion:b.clasificacion,
         horario:horario,
         cantidad:1,
         duracion:b.duracion
        }

    setCompra(objtemporal)
  }

const calcular = (b, peli) => {
    var precio;
    if(peli.clasificacion==='A'){
      precio=50;
    }else if(peli.clasificacion==='B'){
      precio=80;
    }else if(peli.clasificacion==='C'){
      precio=95;
    } 

    const objtemporal={
          codigo:peli.codigo,
          nombre:peli.nombre,
         idioma:peli.idioma,
         clasificacion:peli.clasificacion,
         horario:peli.horario,
         cantidad:b,
         duracion:peli.duracion,
         precio:b*precio,
        }

    setCompra(objtemporal);
  };

  const borrartodo=() =>{
    setCompra([]);
  }

  const comprar=(peli) =>{
    if(peli.cantidad>0){
      setCompra([]);
    }
  }

  return(
    <Funciones.Provider
    value={{
      agregar,
      calcular,
      borrartodo,
      cartelera,
      compra,
      comprar     
    }} 
    >
      {props.children}
    </Funciones.Provider>
  ); 
}

export default Funcionesprovider;