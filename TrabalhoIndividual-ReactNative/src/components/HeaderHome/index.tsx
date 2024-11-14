import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.botao}>
        <Text style={styles.Icon}>AA</Text>
      </View>

      <View style={styles.botaosearch}>
        <Image
          source={require("../../assets/search.png")}
          alt="Icone de lupa"
          style={styles.image}
        />
        <Text style={styles.texto}>Buscar</Text>
      </View>

      <View style={styles.botao}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/info.png")}
            alt="Icone de informação"
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.botao}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/message.png")}
            alt="Icone de messagens"
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.botao}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/bell.png")}
            alt="Icone de sino"
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.notification}>
        <Text style={styles.textNotification}>20</Text>
      </View>
    </View>
  );
};
