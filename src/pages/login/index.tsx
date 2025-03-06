import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from "../../global/themes";
import CreateAccount from "../createAccount/index";

export default function Login () 
{
    const [showRegister, setShowRegister] = useState(false) // Estado para alternar entre as telas

    if (showRegister) {
        return <CreateAccount goBack={() => setShowRegister(false)}/>
    }

    return (
        <View style={style.container}>
            <View style={style.top}>
                <Image source={Logo} style={style.logo}/>
                <Text style={style.title}>Faça seu Login</Text>
            </View>
            <View style={style.mid}>
                <Text style={style.titleInput}>Endereço de e-mail</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input}/>
                    <MaterialIcons 
                        name="email" 
                        size={20} 
                        color={themas.colors.gray}
                    />
                </View>

                <Text style={style.titleInput}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input}/>
                    <MaterialIcons 
                        name="remove-red-eye" 
                        size={20} 
                        color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={style.bottom}>
                <TouchableOpacity style={style.button}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={style.footer}>
                <Text>
                    Não possui conta?{" "}
                    <Text style={style.link} onPress={() => setShowRegister(true)}>
                        Crie aqui!
                    </Text>
                </Text>
            </View>
        </View>
    )  
}