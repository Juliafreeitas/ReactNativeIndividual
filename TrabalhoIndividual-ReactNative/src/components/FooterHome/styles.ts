import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  image: {
    width: 25,
    height: 25,
  },

  botao: {
    width: 70,
    height: 70,
    margin: 6,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  botaofocus: {
    width: 70,
    height: 70,
    margin: 6,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1ba284",
  },

  pagar: {
    width: 120,
    borderRadius: 35,
    backgroundColor: "black",
    paddingVertical: 8,
    top: -160,
    right: -280,
  },

  botaoPagar: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  textoPagar: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
  },

  iconPagar: {
    height: 35,
    width: 35,
    tintColor: "white",
  },
});
