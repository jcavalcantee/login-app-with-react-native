import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from "../../global/themes";
import CreateAccount from "../createAccount/index";

export default function Login() {
    const [showRegister, setShowRegister] = useState(false) // Estado para alternar entre as telas
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    function getLogin() {
        try {
            if (!email || !password) {
                return Alert.alert('Warning', 'Enter with your credentials!')
            }

            setLoading(true)
            setTimeout(() => {
                if(email == 'test@gmail.com' && password == '123')
                    Alert.alert('Login successful')
                else
                    Alert.alert('User not found!')
                setLoading(false)
            }, 3000)

        } catch (error) {
            console.log('Error')
        }
    }

    if (showRegister) {
        return <CreateAccount goBack={() => setShowRegister(false)} />
    }

    return (
        <View style={style.container}>
            <View style={style.top}>
                <Image source={Logo} style={style.logo} />
                <Text style={style.title}>Faça seu Login</Text>
            </View>
            <View style={style.mid}>
                <Text style={style.titleInput}>Endereço de e-mail</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} value={email} onChangeText={setEmail} />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>

                <Text style={style.titleInput}>
                    Senha
                </Text>
                <View style={style.boxInput}>
                    <TextInput secureTextEntry={true} style={style.input} value={password} onChangeText={setPassword} />
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={style.bottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    {
                        loading?
                            <ActivityIndicator color={'#FFFF'} size={'small'}/>
                        :
                            <Text style={style.textButton}>Entrar</Text>
                    }
                </TouchableOpacity>
            </View>
            <Text>
                Não possui conta?{" "}
                <Text style={style.link} onPress={() => setShowRegister(true)}>
                    Crie aqui!
                </Text>
            </Text>
        </View>
    )
}