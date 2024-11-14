import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  cabecalho: {
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  
  main: {
    margin: 5,
    marginTop: 120,
  },

  rodape: {
    marginTop: 80,
    padding: 5,
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  textoTitulo: {
    margin: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
});
