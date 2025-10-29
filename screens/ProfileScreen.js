import { useState, useEffect } from 'react';
import { Layout, Input, ButtonRounded } from '../components';
import { Text } from 'react-native';

export default function ProfileScreen({navigation}){

    return (
        <Layout>
            <ButtonRounded title="Salir" isPrimary={false} />
        </Layout>
    );
}