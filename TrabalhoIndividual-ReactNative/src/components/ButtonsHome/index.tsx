import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HomeApi } from "../../Mock/home";
import { styles } from "./styles";

interface PropsApi {
  data: {
    titulo: string;
    icon: ImageSourcePropType | string | any;
  };
}

const CardApi = ({ data }: PropsApi) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <View style={styles.botao}>
          <Text style={styles.texto}>{data.titulo}</Text>
          <Image source={data.icon} alt="Icone" style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const ButtonsHome = () => {
  return (
    <FlatList
      data={HomeApi}
      keyExtractor={(dados) => dados.id.toString()}
      renderItem={({ item }) => (
        <View>
          <CardApi data={item} />
        </View>
      )}
    />
  );
};
