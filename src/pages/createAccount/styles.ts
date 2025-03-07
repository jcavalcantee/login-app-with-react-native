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
        justifyContent: 'flex-start',
        paddingBottom: 20
    },
    header: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        marginTop: '10%'
    },
    logo: {
        width:130, 
        height:80,
        marginTop: '8%'
    },
    middle: {
        // flex: 3
        marginTop: '60%',
        paddingHorizontal: 30,
        flexGrow: 1
    },
    footer: {
        width: "100%", 
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 20,
        backgroundColor: "#fff", 
    },
    formContainer: {
        flex: 1, 
        width: "100%",
    },
    scrollContainer: {
        flexGrow: 1,
        marginTop: '55%',
        paddingHorizontal: 30,
        paddingBottom: 100 
    },
})