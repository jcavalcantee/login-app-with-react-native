import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { style } from "../login/styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { testStyles } from "./styles";

export default function CreateAccount({ goBack }: { goBack: () => void }) {
    return (
        <View style={testStyles.container}>
            <View style={style.top}>
                <Image source={Logo} style={style.logo} />
                <Text style={style.title}>Crie sua conta!</Text>
            </View>
            <View style={style.mid}>
                <Text style={style.titleInput}>Nome Completo</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} />
                </View>

                <Text style={style.titleInput}>Telefone</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} />
                </View>

                <Text style={style.titleInput}>E-mail Institucional</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} />
                </View>

                <Text style={style.titleInput}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} />
                </View>

                <Text style={style.titleInput}>Confirme a Senha</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} />
                </View>
            </View>
            <View style={testStyles.containerButtons}>
                <TouchableOpacity style={testStyles.cancelButton} onPress={goBack}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testStyles.confirmButton}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}