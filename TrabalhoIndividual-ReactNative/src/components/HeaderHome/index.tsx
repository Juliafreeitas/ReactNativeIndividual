import { View, Text, FlatList, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { styles } from "./styles";
import { HeaderApi } from "../../Mock/header";

export const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.botao}>
        <Text style={styles.Icon}>AA</Text>
      </View>

      <View style={styles.botaosearch}>
        <Image
          source={require("../../assets/icon.png")}
          alt="Icon"
          style={styles.image}
        />
        <Text style={styles.texto}>Buscar</Text>
      </View>

      <View style={styles.botao}>
        <Image
          source={require("../../assets/icon.png")}
          alt="Icon"
          style={styles.image}
        />
      </View>
      <View style={styles.botao}>
        <Image
          source={require("../../assets/icon.png")}
          alt="Icon"
          style={styles.image}
        />
      </View>
      <View style={styles.botao}>
        <Image
          source={require("../../assets/icon.png")}
          alt="Icon"
          style={styles.image}
        />
      </View>
      <View style={styles.notification}>
        <Text style={styles.textNotification}>20</Text>
      </View>
    </View>
  );
};

