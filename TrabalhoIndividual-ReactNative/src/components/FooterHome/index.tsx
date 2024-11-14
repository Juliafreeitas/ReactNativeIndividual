import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FooterApi } from "../../Mock/footer";
import { styles } from "./styles";

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
            <Image
              source={data.icon}
              alt="Icone"
              style={{
                tintColor: "white",
                height: styles.image.height,
                width: styles.image.width,
              }}
            />
          </View>
          <Text style={{ color: "white" }}>{data.titulo}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.botao}>
          <View>
            <Image source={data.icon} alt="Icone" style={styles.image} />
          </View>
          <Text>{data.titulo}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const HeaderFooter = () => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={FooterApi}
        keyExtractor={(dados) => dados.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.main}>
            <CardApi data={item} />
          </View>
        )}
      />
      <View style={styles.pagar}>
        <TouchableOpacity style={styles.botaoPagar}>
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
