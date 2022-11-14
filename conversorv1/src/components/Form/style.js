import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "80%",
        bottom:0,
        alignItems:"center",
        marginTop:5,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },

    form:{
        width:"100%",
        height: "auto",
        marginTop: 30,
        padding: 10

    },

    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft: 20
    },

    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor: "#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
        borderWidth: 1.5,
        borderColor: '#DCDCDC',
    },

    textButton:{
        fontSize: 20,
        color:"#ffffff"
    },

    button:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#1967d2",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin: 10
    },

    buttonconverter:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#f6f6f6",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin: 10,
        borderWidth: 1.5,
        borderColor: '#DCDCDC',
    },

    text:{
        backgroundColor:"#E0FFFF",
        borderRadius:50,
        borderWidth: 1

    },

    container: {
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        paddingTop:14,
        paddingBottom:14,
        width:"80%",
    },

    contentAlert:{
        marginTop: 20,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },

    warningAlert:{
        paddingLeft: 10,
        color: "#000000",
        fontSize: 16
    },


});

export default styles