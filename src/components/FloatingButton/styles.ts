import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 65,
        height: 65,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2b29b5',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
        height: 0,
        width: 0,
        },
        elevation: 6
    },
    text: {
        fontSize: 40,
        color: 'white'
    },
    image: {
        width: 30,
        height: 30
    }
})