import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cabecalho: {
    flex: 0.2,
    gap: 30,
    flexDirection: "row-reverse",
    marginBottom: 120,
    height: 120,
    // backgroundColor: "green",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: "center",
    
  },

  main: {
    flex: 0.6,
    // alignItems: "center",
    marginTop: 120,
    justifyContent: "center",
  },
  
  rodape: {
    backgroundColor: "#f2f2f2",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 1,
    // position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: 100
  },

  textoTitulo: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 15,
  },
});
