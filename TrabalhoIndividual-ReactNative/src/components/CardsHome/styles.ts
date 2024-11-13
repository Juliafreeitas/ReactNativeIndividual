import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 10,
  },

  boxTexto: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },

  boxTitulo: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  texto: {
    color: "white",
    fontSize: 15,
    margin: 20,
    fontWeight: "bold",
  },

  titulo: {
    marginLeft: 20,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  subtitulo: {
    margin: 20,
    marginTop: 0,
    color: "white",
    fontSize: 15,
  },

  botaoolho: {
    width: 50
  },

  botao: {
    backgroundColor: "white",
    margin: 20,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  a: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginRight: 10,
  },

  textoBotao: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },

  conta: {
    borderRadius: 20,
    width: "100%",
    height: 250,
    backgroundColor: "#1ba284",
    justifyContent: "center",
  },

  icon: {
    height: 24, width: 24,
    tintColor: "white",
    margin: 5
  },

  seta: {
    height: 12, width: 12,
    tintColor: "white",
    margin: 5,
  }
});
