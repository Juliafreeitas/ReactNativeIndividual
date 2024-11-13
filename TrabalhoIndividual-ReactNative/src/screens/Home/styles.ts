import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },

  cabecalho: {
    flex: 0.2,
    gap: 30,
    flexDirection: "row-reverse",
    marginBottom: 0,
    height: 100,
    backgroundColor: "green",

  },

  main: {
    flex: 0.6,
    // alignItems: "center",
    justifyContent: "center",
  },
  
  rodape: {
    flex: 0.2,
    backgroundColor: "green",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },

  textoTitulo: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 15,
  },
});
