import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  Tasks: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5
  },
  deleteTask: {
    justifyContent: "center",
    paddingLeft: 15,
  },
  DescriptionTask: {
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: "#282b2db5",
  },
  buttonNewTask: {
    width: 60,
    height: 60,
    position: "relative",
    bottom: 30,
    left: 20,
    backgroundColor: "#F92e6a",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  formContext: {
    width: "100%",
    height: "80%",
    bottom: 0,
    alignItems: "center",
    marginTop: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10

  },

  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20
  },

  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
    borderWidth: 1.5,
    borderColor: '#DCDCDC',
  },

  textButton: {
    fontSize: 20,
    color: "#ffffff"
  },

  button: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#1967d2",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 10
  },

  buttonconverter: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#f6f6f6",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 10,
    borderWidth: 1.5,
    borderColor: '#DCDCDC',
  },

  text: {
    backgroundColor: "#E0FFFF",
    borderRadius: 50,
    borderWidth: 1

  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    paddingTop: 14,
    paddingBottom: 14,
    width: "80%",
  },

  contentAlert: {
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },

  warningAlert: {
    paddingLeft: 10,
    color: "#000000",
    fontSize: 16
  },
});

export default styles