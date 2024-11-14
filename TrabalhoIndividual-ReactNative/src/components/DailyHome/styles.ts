import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    margin: 8,
    height: 150,
    width: 100,
  },

  botao: {
    height: 80,
    width: 100,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },

  botaopix: {
    height: 80,
    width: 100,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1ba284",
    tintColor: "white",
    marginBottom: 5,
  },

  botaomore: {
    height: 80,
    width: 100,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "lightgray",
  },

  texto: {
    textAlign: "center",
    fontSize: 16,
  },

  image: {
    width: 30,
    height: 30,
  },

  subtitulo: {
    width: 80,
    color: "white",
    backgroundColor: "black",
    borderRadius: 12,
    marginLeft: 10,
    padding: 3,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
