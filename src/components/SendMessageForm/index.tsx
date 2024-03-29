import React, { useState } from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';


export function SendMessageForm() {
    const [ message, setMessage ] =useState("");
    const [ sendingMessage, setSendingMessage ] = useState(false);

    async function handleMessageSubmit() {
        const messageFormated = message.trim();

        if(messageFormated.length > 0){
            setSendingMessage(true);
            await api.post('/messages', { message: messageFormated});

            setMessage('');

            //fechar o teclado no react
            Keyboard.dismiss();
            setSendingMessage(false);
            Alert.alert("Mensagem enviada com sucesso!");

        }else {
            Alert.alert("Escreva uma mensagem para enviar");
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                keyboardAppearance="dark"
                placeholder="Qual sua expectativa para o DoWhile 2021?"
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                multiline
                maxLength={140}
                onChangeText={setMessage}
                value={message}
                editable={!sendingMessage}
            />

            <Button  
                title="Enviar mensagem"
                backgroundColor={COLORS.PINK}
                color={COLORS.WHITE}
                isLoading={sendingMessage}
                onPress={handleMessageSubmit}
            />
        </View>
    
    )
}