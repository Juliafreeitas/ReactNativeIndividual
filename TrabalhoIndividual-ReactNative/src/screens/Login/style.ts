import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "space-between",
    marginTop: 60
  },

  cabecalho: {
    gap: 30,
    flexDirection: "row",
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
    alignContent: "center",
    marginBottom: "110%",
  },

  botaoRodape: {
    flexDirection: "column-reverse",
  },
});
