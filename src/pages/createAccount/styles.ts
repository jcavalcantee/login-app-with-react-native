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
    containerButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        flexDirection: 'column'
    }
})