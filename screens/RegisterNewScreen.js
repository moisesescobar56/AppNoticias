import { useState, useEffect } from 'react';
import { Layout, Input, ButtonRounded } from '../components';
import { agregarNoticia } from '../services/newService';
import { Alert } from 'react-native';

export default function RegisterNewScreen({ navigation }){
    const [titulo, setTitulo] = useState('');
    const [imagenUrl, setImagenUrl] = useState('');
    const [contenido, setContenido] = useState('');

    async function guardar(){
        //validar
        if (!titulo || !imagenUrl || !contenido) {
          Alert.alert( "Error", "Por favor, completa todos los campos obligatorios." );
          return;
        }

        // guardar noticia
        await agregarNoticia({
            titulo: titulo,
            imagenUrl: imagenUrl,
            contenido: contenido
        });

        navigation.popToTop(); //cerrar screen
    }

    return (
        <Layout>
            <Input 
                label="Titulo"
                placeholder="titulo principal"
                type="default"
                value={titulo}
                onChangeText={setTitulo} />               
            <Input 
                label="ImagenUrl"
                placeholder="http://sitio.com/imagen.png"
                type="default"
                value={imagenUrl}
                onChangeText={setImagenUrl} />
            <Input 
                label="Contenido"
                placeholder="escribir aqui..."
                lines={4}
                value={contenido}
                onChangeText={setContenido} />

            <ButtonRounded title="Guardar" onPress={guardar} />    
            <ButtonRounded title="Cancelar" isPrimary={false} onPress={()=> navigation.popToTop()} />    
        </Layout>
    );
}