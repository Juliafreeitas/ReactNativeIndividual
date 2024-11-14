import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
// import { icon } from "../../assets/icon.png";

export const CardsHome = () => {
  const [saldo, setSaldo] = useState<number>(0);
  const [visibility, setVisibility] = useState<boolean>(true);

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={styles.conta}>
          <View style={styles.boxTexto}>
            <Text style={styles.texto}>Conta</Text>
            <TouchableOpacity>
              <Text style={styles.texto}>
                Ver extrato
                <Image
                  source={require("../../Mock/images/arrow.png")}
                  alt="Seta"
                  style={styles.seta}
                />
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titulo}>Saldo em Conta</Text>

          <View style={styles.boxTitulo}>
            {visibility === true ? (
              <Text style={styles.titulo}>R$ {saldo}</Text>
            ) : (
              <Text style={styles.hide}>R$ {saldo}</Text>
            )}
          </View>

          <View style={styles.a}>
            <Text style={styles.subtitulo}>Rendendo 102% do CDI</Text>
            <TouchableOpacity
              onPress={() => setVisibility(!visibility)}
              style={styles.botaoolho}
            >
              {visibility === true ? (
                <Image
                  source={require("../../Mock/images/closedeye.png")}
                  alt="Olho fechado"
                  style={styles.icon}
                />
              ) : (
                <Image
                  source={require("../../Mock/images/eye.png")}
                  alt="Olho aberto"
                  style={styles.icon}
                />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Use cartão de outro banco</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.cartao}>
          <Text style={styles.texto2}>Cartão</Text>
          <Text style={styles.titulo2}>
            Limite de crédito pra você sem anuidade
          </Text>
          <TouchableOpacity style={styles.botao2}>
            <Text style={styles.textoBotao2}>Conheça o cartão</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
