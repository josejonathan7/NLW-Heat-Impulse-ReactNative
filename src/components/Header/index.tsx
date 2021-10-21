import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style';
import LogoSvg from '../../assets/logo.svg';

export function Header() {


    return (
        <View style={styles.container}>
            <LogoSvg />

            <TouchableOpacity>
                <Text style={styles.logoutText} >Sair</Text>
            </TouchableOpacity>
            
        </View>
    );
}