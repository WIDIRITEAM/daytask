import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";

export const styles = StyleSheet.create({
    safeAreView: {
        paddingHorizontal: 20,
        flex: 1,
        gap: 5
    },
    taskContainer: {
        borderRadius: 15,
        width: '100%',
        flex: 1,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
        height: 0,
        width: 0,
        },
        elevation: 6,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    titleContainer: {
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        backgroundColor: '#2b29b5',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    taskTitles: {
        padding: 5,
        paddingTop: 10,
        alignSelf: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    },
    floatingButtonContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 20,
        paddingTop: 15
    },
    withoutTaskText: {
        textAlign: "center",
        color: colors.gray,
        fontWeight: "600",
        fontSize: 16,
        marginTop: 30,
    }

})