import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
  },

  main: {
    margin: 8,
    height: 150,
    width: 100,
    borderRadius: 10,
  },

  btnbig: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    height: 80,
    width: 100,
    borderRadius: 15,
  },

  botaopix: {
    backgroundColor: "#1ba284",
    tintColor: "white",
    color: "white",
    height: 80,
    width: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  botaomore: {
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "lightgray",
    height: 80,
    width: 100,
    borderRadius: 15,
  },

  texto: {
    textAlign: "center",
    fontSize: 16,
  },

  image: {
    width: 25,
    height: 25,
  },

  subtitulo: {
    backgroundColor: "black",
    color: "white",
    padding: 3,
    width: 80,
    marginLeft: 10,
    alignItems: "center",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});
