import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { style } from "../login/styles";
import Logo from '../../assets/logo.png'
import { testStyles } from "./styles";

export default function CreateAccount({ goBack }: { goBack: () => void }) {
    return (
        <View style={testStyles.container}>
            <View style={testStyles.header}>
                <Image source={Logo} style={testStyles.logo} />
                <Text style={style.title}>Crie sua conta!</Text>
            </View>
            <View style={testStyles.middle}>
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
            <View style={testStyles.footer}>
                <TouchableOpacity style={testStyles.cancelButton} onPress={goBack}>
                    <Text style={style.textButton}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testStyles.confirmButton}>
                    <Text style={style.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}