import React, { useState } from "react";
import { 
    Text, View, Image, TextInput, TouchableOpacity, 
    Alert, ActivityIndicator, ScrollView 
} from "react-native";
import { style } from "../login/styles";
import Logo from "../../assets/logo.png";
import { testStyles } from "./styles";
import { registerUser } from "../../components/fetchAPI/createAccount";

export default function CreateAccount({ goBack }: { goBack: () => void }) {

    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const insertUser = async () => {
        try {
            if (!fullName || !phone || !email || !password)
                return Alert.alert("Warning!", "Enter the data for registration.");

            setLoading(true);
            setTimeout(async () => {
                const response = await registerUser(fullName, phone, email, password);

                if(response.success)
                    Alert.alert("Register successful!");
                else
                    Alert.alert("Warning", "Something went wrong in your registration.");
                setLoading(false);

            }, 3000);
        } catch (error) {
            Alert.alert(`Error in registration: ${error}`);
        }
    };

    return (
        <View style={testStyles.container}>
            {/* Cabeçalho fixo */}
            <View style={testStyles.header}>
                <Image source={Logo} style={testStyles.logo} />
                <Text style={style.title}>Crie sua conta!</Text>
            </View>

            <ScrollView 
                contentContainerStyle={testStyles.scrollContainer} 
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={true} 
            >
                <View style={testStyles.formContainer}>
                    <Text style={style.titleInput}>Nome Completo</Text>
                    <View style={style.boxInput}>
                        <TextInput 
                            style={style.input}
                            value={fullName}
                            onChangeText={setFullName}
                            placeholder="Digite seu nome"
                        />
                    </View>

                    <Text style={style.titleInput}>Telefone</Text>
                    <View style={style.boxInput}>
                        <TextInput 
                            style={style.input}
                            value={phone}
                            onChangeText={setPhone}
                            placeholder="Digite seu telefone"
                        />
                    </View>

                    <Text style={style.titleInput}>E-mail Institucional</Text>
                    <View style={style.boxInput}>
                        <TextInput 
                            style={style.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Digite seu e-mail"
                        />
                    </View>

                    <Text style={style.titleInput}>Senha</Text>
                    <View style={style.boxInput}>
                        <TextInput 
                            style={style.input}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Digite sua senha"
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={testStyles.footer}>
                <TouchableOpacity style={testStyles.cancelButton} onPress={goBack}>
                    <Text style={style.textButton}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testStyles.confirmButton} onPress={insertUser}>
                    {loading ? 
                        <ActivityIndicator color={"#FFFF"} size={"small"} /> 
                        : 
                        <Text style={style.textButton}>Cadastrar</Text>
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
}

