import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style';
import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from "../UserPhoto";
import { useAuth } from "../../hooks/auth";

export function Header() {
    const { user, signOut } = useAuth();

    return (
        <View style={styles.container}>
            <LogoSvg />

            <View style={styles.logoutButton}>
                {
                    user &&
                    <TouchableOpacity onPress={signOut}>
                        <Text style={styles.logoutText} >Sair</Text>
                    </TouchableOpacity>

                }
                
                <UserPhoto imageUri={user?.avatar_url} />
                
            </View>

        </View>
    );
}