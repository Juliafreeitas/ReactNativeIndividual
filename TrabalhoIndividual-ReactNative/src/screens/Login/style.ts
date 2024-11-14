import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 60,
    justifyContent: "space-between",
  },
  
  cabecalho: {
    gap: 30,
    flexDirection: "row",
  },

  iconVoltar: {
    width: 25,
    height: 30,
    marginTop: 2,
  },

  textoCabecalho: {
    fontSize: 22,
    fontWeight: "bold",
    alignItems: "flex-start",
  },

  input: {
    flex: 0.6,
    alignContent: "center",
    marginBottom: "140%",
  },

  botaoRodape: {
    flex: 0.2,
  },
});
