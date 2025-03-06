import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        // backgroundColor: 'red',
        height:Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mid:{
        // backgroundColor: 'blue',
        height:Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 37
    },
    bottom: {
        // backgroundColor: 'green',
        height:Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 40
    },
    logo: {
        width:130, 
        height:80
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20
    }, 
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray
    },
    input: {
        width: '90%',
        height: '100%',
        borderRadius: 40
    },
    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        marginTop: 25
    },
    footer: {

    },
    link: {
        color: themas.colors.blue, 
        textDecorationLine: 'underline'
    }
})