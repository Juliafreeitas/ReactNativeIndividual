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
import { HeaderApi } from "../../Mock/header";
import { FooterApi } from "../../Mock/footer";

export const HeaderFooter = () => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={FooterApi}
        keyExtractor={(dados) => dados.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <CardApi data={item} />
          </View>
        )}
      />
      <View style={styles.botaoPagar}>
        <TouchableOpacity style={styles.botaoPagar2}>
          <Text style={styles.textoPagar}>Pagar</Text>
          <Image
            source={require("../../Mock/images/qrcode.png")}
            alt="Icon de qr code"
            style={styles.iconPagar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface PropsApi {
  data: {
    id: number;
    titulo: string;
    icon: ImageSourcePropType | string | any;
  };
}

const CardApi = ({ data }: PropsApi) => {
  return (
    <View>
      {data.id === 1 ? (
        <TouchableOpacity style={styles.botaofocus}>
          <View>
            <Image source={data.icon} alt="Icone" style={{tintColor: "white", height: styles.image.height, width: styles.image.width}} />
          </View>
          <Text style={{fontWeight: styles.texto.fontWeight, color: "white"}}>{data.titulo}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.botao}>
          <View>
            <Image source={data.icon} alt="Icone" style={styles.image} />
          </View>
          <Text style={styles.texto}>{data.titulo}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
