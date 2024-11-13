import { View, Text, FlatList, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { styles } from "./styles";
import { HomeApi } from "../../Mock/home";

export const ButtonsHome = () => {
  return (
    <FlatList
      data={HomeApi}
      keyExtractor={(dados) => dados.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <CardApi data={item} />
        </View>
      )}
    />
  );
};

interface PropsApi {
  data: {
    titulo: string;
    icon: ImageSourcePropType | string | any;
  };
}

const CardApi = ({ data }: PropsApi) => {
  return (
    <View style={styles.main}>
      <View style={styles.btnbig}>
        <Text style={styles.texto}>{data.titulo}</Text>
        <Image source={data.icon} alt="Icone" style={styles.image} />
      </View>
    </View>
  );
};
