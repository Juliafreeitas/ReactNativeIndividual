import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "space-between",
    marginTop: 60,
  },
  
  cabecalho: {
    flex: 0.2,
    gap: 30,
    flexDirection: "row",
    marginBottom: 0
  },

  iconVoltar: {
    width: 25,
    height: 30,
    marginTop: 3,
  },

  textoCabecalho: {
    fontWeight: "bold",
    fontSize: 22,
    alignItems: "flex-start",
  },

  input: {
    flex: 0.6,
    alignContent: "center",
    marginBottom: "140%",
  },

  botaoRodape: {
    flex: 0.2,
    flexDirection: "column-reverse",
  },
});
