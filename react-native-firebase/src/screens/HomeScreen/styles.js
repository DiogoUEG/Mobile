import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    },
    buttonSingOut: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center',
        color: 'white',
        fontSize: 16
    },
    formContainerSingOut: {
        height: 10,
        marginTop: 10,
        marginBottom: 10,
        flex: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
})
