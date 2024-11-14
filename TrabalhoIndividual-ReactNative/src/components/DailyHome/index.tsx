import { View, Text, FlatList, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { styles } from "./styles";
import { HomeApi } from "../../Mock/home";
import { DailyApi } from "../../Mock/daily";

export const DailyHome = () => {
  return (
    <FlatList
      horizontal={true}
      data={DailyApi}
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
    background?: string,
    colorIcon?: string
  };
}

const CardApi = ({ data }: PropsApi) => {
  return (
    <View style={styles.main}>
      <View style={styles.btnbig}>
        <Image source={data.icon} alt="Icone" style={styles.image} />
      </View>
      <Text style={styles.texto}>{data.titulo}</Text>
    </View>
  );
};
