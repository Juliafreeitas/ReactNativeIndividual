import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
// import { icon } from "../../assets/icon.png";

export const CardsHome = () => {
  const [saldo, setSaldo] = useState<number>(0);
  const [visibility, setVisibility] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View style={styles.conta}>

        <View style={styles.boxTexto}>
          <Text style={styles.texto}>Conta</Text>
          <TouchableOpacity>
            <Text style={styles.texto}>Ver extrato 

            <Image source={require("../../assets/icon.png")} alt="Seta" style={styles.seta} />
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titulo}>Saldo em Conta</Text>

        <View style={styles.boxTitulo}>
          <Text style={styles.titulo}>R$ {saldo}</Text>
        </View>

        <View style={styles.a}>
          <Text style={styles.subtitulo}>Rendendo 102% do CDI</Text>
          <TouchableOpacity style={styles.botaoolho}>
            {/* <Text>Olho</Text> */}
            <Image source={require("../../assets/icon.png")} alt="Seta" style={styles.icon} />

          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Use cartão de outro banco</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// interface PropsApi {
//   data: {
//     titulo: string;
//     icon: ImageSourcePropType | string | any;
//   };
// }

// const CardApi = ({ data }: PropsApi) => {
//   return (
//     <View style={styles.main}>
//       <View style={styles.btnbig}>
//         <Text style={styles.texto}>{data.titulo}</Text>
//         <Image source={data.icon} alt="Icone" style={styles.image} />
//       </View>
//     </View>
//   );
// };
