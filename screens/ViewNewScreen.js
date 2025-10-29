import { useState, useEffect } from 'react';
import { Layout, Input, ButtonRounded } from '../components';
import { ScrollView, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import { formatDate } from "../services/newService";


export default function ViewNewScreen({route}){
    const { noticia } = route.params;
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setItem(noticia);
        setLoading(false);
    }, []);

    if(loading) return <ActivityIndicator style={{ flex: 1 }} />;

    return (
        <Layout>
            <ScrollView style={styles.container} >
                <Text style={styles.title}>{item.titulo}</Text>
                <Text style={styles.date}>{ formatDate(item.fechaHora) }</Text>
                <Image style={styles.image} source={{uri: item.imagenUrl}} />
                <Text style={styles.text} >{item.contenido} </Text>
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
},
title: {
    fontWeight: "bold",
    fontSize: 22,
},
date: {
    color: "#666",
    marginTop: 5,
},
text:{
    textAlign: "justify",
    fontSize: 14,
    lineHeight: 22.5,
    marginBottom: 15,
  },
  image: {
    height: 250,
    width: '100%',
    marginTop: 5,
  },
});
