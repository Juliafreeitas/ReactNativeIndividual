import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },

  botao: {
    // borderWidth: 1,
    // borderColor: "black",
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  
  texto: {
    fontWeight: "bold",
  },
  
  
  
  image: {
    width: 25,
    height: 25,
  },

  botaoPagar: {
    position: "relative",
    color: "black",
    backgroundColor: "black",
    borderRadius: 35,
    top: -160,
    right: -280,
    height: 60,
    width: 120,
    paddingVertical: 8,
    
    // borderWidth: 1,
    // borderColor: "red",
  },

  botaoPagar2: {
  
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  
  textoPagar: {
    height: '100%',
    width: "55%",
    padding: 10,

    // alignSelf: "center",
    color: "white",
    fontWeight: "bold",
// justifyContent:"center",
    fontSize: 16,
    // top: -5
    // borderWidth: 1,
    // borderColor: "green",
  },

  iconPagar: {
    height: 35,
    width: 35,
    tintColor: "white",
    // borderWidth: 1,
    // borderColor: "blue",
  },
});
