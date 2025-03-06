import { themas } from "../../global/themes"
import { StyleSheet } from "react-native"

export const testStyles = StyleSheet.create({
    cancelButton: {
        backgroundColor: themas.colors.gray,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 25
    },
    confirmButton: {
        backgroundColor: themas.colors.primary,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 25
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width:130, 
        height:80,
        marginTop: '8%'
    },
    middle: {
        flex: 3
    },
    footer: {
        flex: 0.2,
        flexDirection: 'row',
        marginBottom: '20%',
        justifyContent: 'space-between',
        width: '90%'
    }
})