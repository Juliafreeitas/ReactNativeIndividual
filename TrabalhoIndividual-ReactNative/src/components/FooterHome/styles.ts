import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 20,
    justifyContent: "space-between",
    marginTop: 60,
  },

  cabecalho: {
    flex: 0.2,
    gap: 30,
    flexDirection: "row",
    marginBottom: 0,
    backgroundColor: "green",

  },

  main: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  
  rodape: {},
  
  saldo: {},
  
  btnsmal: {},
  
  btnbig: {
    backgroundColor: '#f2f2f0',
    height: 65,
    width: "90%",
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 20,
    flexDirection: "row"    
  },

  pagar: {},

  image: {
    width: 30,
    height: 30,
  }
});
