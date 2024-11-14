import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: "row",
    marginTop: 50,
    // borderWidth: 1,
    // borderColor: "red",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20
    // margin: 20,
    // justifyContent: "space-between",
    // marginTop: 60,
    // flexDirection: "row",
    
    // justifyContent: "center",
    // alignItems: "center",
    
  },

  botao: {
    height: 42,
    width: 42,
    borderRadius: 40,
    backgroundColor: "#f2f2f2",
    marginHorizontal: 3,
    alignItems: "center",
    justifyContent: "center",
    
  },
  
  botaosearch: {
    marginHorizontal: 3,
    margin: 10,
    width: 200,
    borderRadius: 40,
    backgroundColor: "#f2f2f2",
    height: 45,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    // justifyContent: "space-evenly"
    
  },


  image: {
    width: 20,
    height: 20,
    margin: 10,
  },

texto: {
color: "lightgray",
fontSize: 15,
},

  Icon: {
    fontSize: 16,
    color: "black",
    tintColor: "black",
    position: "absolute",
  },

  notification: {
    position: "relative",
    backgroundColor: "#f57454",
    width: 20,
    height: 20,
    borderRadius: 20,
    top: -12,
    right: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  textNotification: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
