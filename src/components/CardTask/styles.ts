import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: 'gray',
        paddingHorizontal: 20,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        flexDirection: 'row',
        alignItems: 'center', // Ajustar el alineamiento vertical
        paddingVertical: 10,
    },
    descriptionContainer: {
        flexDirection: 'column',
        gap: 4,
        flex: 1,
        paddingRight: 10
    },
    title: {
        fontSize: 17,
        fontWeight: '600',
        flexWrap: 'wrap'
    },
    description: {
        fontSize: 16,
        color: colors.gray,
        flexWrap: 'wrap'
    },
    deleteAction: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        width: 100,
        height: '100%'
    },
    editAction: {
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        width: 100,
        height: '100%'
    },
    swipeableText: {
        fontSize: 16,
        color: 'white'
    }
})