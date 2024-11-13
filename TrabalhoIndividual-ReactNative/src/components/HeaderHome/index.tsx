import { View, Text, FlatList, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { styles } from "./styles";
import { HeaderApi } from "../../Mock/header";

export const HeaderHome = () => {
  return (
    <FlatList
      horizontal={true}
      data={HeaderApi}
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
    <View>
      <View style={styles.btn}>
        <Text>{data.titulo}</Text>
        <Image source={data.icon} alt="Icone" style={styles.image} />
      </View>
      <View >
        <Image source={data.icon} alt="Icone" style={styles.image} />
      </View>
    </View>
  );
};
