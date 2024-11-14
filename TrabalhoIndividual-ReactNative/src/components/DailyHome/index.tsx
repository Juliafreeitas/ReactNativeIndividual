import {
  View,
  Text,
  FlatList,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
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
    id: number;
    titulo: string;
    icon: ImageSourcePropType;
    subtitulo?: string;
  };
}

const CardApi = ({ data }: PropsApi) => {
  return (
    <View style={styles.main}>
      {data.id !== 1 ? (
        <TouchableOpacity>
          <View style={data.id === 11 ? styles.botaomore : styles.btnbig}>
            <Image source={data.icon} alt={data.titulo} style={styles.image} />
          </View>
          <Text style={styles.texto}>{data.titulo}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <View style={styles.botaopix}>
            <Image source={data.icon} alt={data.titulo} style={{tintColor: "white", height: styles.image.height, width: styles.image.width}} />
          </View>
          <Text style={styles.subtitulo}>{data.subtitulo}</Text>
          <Text style={styles.texto}>{data.titulo}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

//styles.btnbig
