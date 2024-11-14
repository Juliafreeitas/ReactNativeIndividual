import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    marginLeft: 10,
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

  Icon: {
    fontSize: 16,
  },

  image: {
    width: 20,
    height: 20,
    margin: 10,
  },

  botaosearch: {
    width: 200,
    height: 45,
    margin: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 40,
    alignItems: "center",
    flexDirection: "row",
  },

  texto: {
    color: "lightgray",
    fontSize: 15,
  },

  notification: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#f57454",
    justifyContent: "center",
    alignItems: "center",
    right: 70,
    top: -12,
  },

  textNotification: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
