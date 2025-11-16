import { StyleSheet } from "react-native";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f40000ff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    paddingBottom: 60,
    flex: 1,
    backgroundColor: "#ffffffff",
  },
  containerTitulo: {
    backgroundColor: "#ffffffff",
    height: 100,
    top: 50,
    left: 20,
    flexDirection: "row",
  },
  textInput: {
    backgroundColor: "#eeeeeeff",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scrow: {
    marginTop: 20,
    maxHeight: 200,
  },
  texto: {
    fontSize: 200,
    fontFamily: "Poppins_400Regular",
    color: "#000000ff",
  },
  titulo: {
    textAlign: "left",
    marginLeft: 20,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    color: "#000000ff",
  },
  titulo2: {
    top: 20,
    textAlign: "left",
    marginLeft: 20,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    color: "#000000ff",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    color: "#eeff00ff",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    width: 210,
    height: 210,
    marginLeft: 10,
    borderRadius: 10,
  },
  banner2: {
    width: 190,
    height: 190,
    marginLeft: 10,
    borderRadius: 10,
  },
  footer: {
    position: "absolute",
    bottom: 50,
    height: 50,
    width: "100%",
    borderWidth: 1,
  },
  batata: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  registro: {
    top: 10,
    height: 60,
    backgroundColor: "#ffffffcb",
    boxShadow: "0px 4px 4px #00000029",
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 5,
    flexDirection: "row",
  },
  chave: {
    left: 0,
    fontSize: 20,
  },
  textButton1: {
    flex: 1,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    color: "#0a0808ff",
  },
  textButton2: {
    flex: 1,
    fontFamily: "Poppins_400Regular",
    fontSize: 7,
    textAlign: "center",
    color: "#0a0808ff",
  },
});

export default styles;
