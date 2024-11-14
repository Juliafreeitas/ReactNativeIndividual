import {
  View,
  Text,
  FlatList,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { HeaderApi } from "../../Mock/header";


interface MessagemAlerta {
  titulo: string;
}

const AlertButton = (titulo: string) => {
  Alert.alert("Botão de ", titulo);
}
export const HeaderHome = () => {
  // const [titulo, setTitulo] = useState<string>("");


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
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon.png")}
            alt="Icon"
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.botao}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon.png")}
            alt="Icon"
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.botao}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon.png")}
            alt="Icon"
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
